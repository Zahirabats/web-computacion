// carrusel.js — SP3-01 · Carrusel de proyectos destacados.
// Lee proyectos-data.js: cada proyecto aparece solo. Foto = campo "portada" (opcional) o su primera foto.
// Opcional: portadaPos (ej. "50% 25%") para elegir qué parte de la foto se ve.
// Para dejar un proyecto fuera del carrusel: destacado: false.
(function () {
  var raiz = document.getElementById('carrusel');
  if (!raiz || typeof baseDeDatosProyectos === 'undefined') return;

  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var items = baseDeDatosProyectos.filter(function (p) { return p.destacado !== false; }).map(function (p) {
    return { id: p.id, titulo: p.titulo, texto: p.descripcion || '', img: p.portada || (p.fotos && p.fotos[0] && p.fotos[0].src) || '', pos: p.portadaPos || '' };
  });
  if (!items.length) { var sec = raiz.closest('.car-sec'); if (sec) sec.hidden = true; return; }

  var n = items.length, actual = 0, timer = null, pausadoPorUsuario = false, pausadoTemporal = false;
  var imgTag = function (it, cls, i) {
    return it.img ? '<img class="' + cls + '" src="' + esc(it.img) + '" alt="" ' + (i === 0 ? 'fetchpriority="high"' : 'loading="lazy"') + ' decoding="async" onerror="this.remove()">' : '';
  };

  if (n === 1) raiz.classList.add('solo');

  raiz.innerHTML =
    '<div class="car-slides" aria-live="off">' + items.map(function (it, i) {
      return '<article class="car-slide' + (i === 0 ? ' on' : '') + '" role="group" aria-roledescription="diapositiva" aria-label="' + (i + 1) + ' de ' + n + '">' +
        imgTag(it, 'car-bg', i) +
        '<div class="car-text"><h3 class="car-title">' + esc(it.titulo) + '</h3>' +
        (it.texto ? '<p class="car-desc">' + esc(it.texto) + '</p>' : '') +
        '<a class="btn accent" href="proyecto.html?id=' + encodeURIComponent(it.id) + '">Ver proyecto</a></div></article>';
    }).join('') + '</div>' +
    '<div class="car-ctl">' +
      '<button type="button" class="car-btn car-prev" aria-label="Proyecto anterior"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg></button>' +
      '<div class="car-dots">' + items.map(function (it, i) { return '<button type="button" class="car-dot" aria-label="Ir al proyecto ' + (i + 1) + ': ' + esc(it.titulo) + '"></button>'; }).join('') + '</div>' +
      '<button type="button" class="car-btn car-next" aria-label="Proyecto siguiente"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg></button>' +
      '<button type="button" class="car-btn car-pause" aria-label="' + 'Pausar' + ' el carrusel"><svg class="i-pause" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg><svg class="i-play" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg></button>' +
    '</div>';

  var slides = raiz.querySelectorAll('.car-slide'), dots = raiz.querySelectorAll('.car-dot'),
      vivo = raiz.querySelector('.car-slides');

  function ir(i) {
    actual = (i + n) % n;
    slides.forEach(function (s, k) { s.classList.toggle('on', k === actual); });
    dots.forEach(function (d, k) { if (k === actual) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current'); });
  }
  function parar() { clearInterval(timer); timer = null; }
  function arrancar() {
    parar();
    if (n < 2 || pausadoPorUsuario || pausadoTemporal) return;
    timer = setInterval(function () { ir(actual + 1); }, 5000);
  }
  function actualizarVivo() { vivo.setAttribute('aria-live', (timer ? 'off' : 'polite')); }
  function reiniciar() { arrancar(); actualizarVivo(); }

  raiz.querySelector('.car-prev').addEventListener('click', function () { ir(actual - 1); reiniciar(); });
  raiz.querySelector('.car-next').addEventListener('click', function () { ir(actual + 1); reiniciar(); });
  dots.forEach(function (d, k) { d.addEventListener('click', function () { ir(k); reiniciar(); }); });
  raiz.querySelector('.car-pause').addEventListener('click', function (e) {
    pausadoPorUsuario = !pausadoPorUsuario;
    raiz.classList.toggle('paused', pausadoPorUsuario);
    e.currentTarget.setAttribute('aria-label', (pausadoPorUsuario ? 'Reanudar' : 'Pausar') + ' el carrusel');
    reiniciar();
  });

  // Pausa solo mientras el mouse está encima o se navega con el teclado.
  // (Un clic o un toque NO deja el carrusel pausado: así no se traba en el celular.)
  raiz.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') { pausadoTemporal = true; reiniciar(); } });
  raiz.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse') { pausadoTemporal = false; reiniciar(); } });
  raiz.addEventListener('focusin', function (e) { if (e.target.matches && e.target.matches(':focus-visible')) { pausadoTemporal = true; reiniciar(); } });
  raiz.addEventListener('focusout', function () { pausadoTemporal = false; reiniciar(); });

  // Flechas del teclado y deslizar con el dedo
  raiz.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { ir(actual - 1); reiniciar(); }
    if (e.key === 'ArrowRight') { ir(actual + 1); reiniciar(); }
  });
  var x0 = null;
  raiz.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  raiz.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 45) { ir(actual + (dx < 0 ? 1 : -1)); reiniciar(); }
  }, { passive: true });

  ir(0); reiniciar();
})();
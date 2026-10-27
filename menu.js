// menu.js — tema claro/oscuro, tooltip del logo y menú hamburguesa.
// Se carga en el <head> (sin defer) para aplicar el tema antes de pintar y evitar el "parpadeo".
(function () {
  var KEY = 'et29-theme';
  var root = document.documentElement;
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function leer() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function guardar(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function sistema() { return mq && mq.matches ? 'dark' : 'light'; }

  function actualizarBoton(t) {
    var btn = document.querySelector('.themebtn');
    if (!btn) return;
    var texto = t === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
    btn.setAttribute('aria-label', texto);
    btn.setAttribute('data-tip', texto);
  }

  function aplicar(t) {
    root.setAttribute('data-theme', t);
    actualizarBoton(t);
  }

  // Tema inicial: el elegido por la persona o, si no eligió, el del dispositivo
  aplicar(leer() || sistema());

  // Si no eligió manualmente, seguir los cambios del sistema
  if (mq) {
    var seguir = function () { if (!leer()) aplicar(sistema()); };
    if (mq.addEventListener) mq.addEventListener('change', seguir);
    else if (mq.addListener) mq.addListener(seguir);
  }

  document.addEventListener('DOMContentLoaded', function () {
    // 1) Sugerencia en el logo
    var brand = document.querySelector('.brand');
    if (brand) {
      brand.setAttribute('data-tip', 'Volver al inicio');
      brand.setAttribute('aria-label', 'Volver al inicio');
    }

    // 2) Botón de tema (se inserta antes de la hamburguesa)
    var burger = document.querySelector('.burger');
    var bar = document.querySelector('.bar');
    if (bar) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'themebtn';
      btn.innerHTML =
        '<svg class="i-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>' +
        '<svg class="i-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
      if (burger) bar.insertBefore(btn, burger); else bar.appendChild(btn);
      actualizarBoton(root.getAttribute('data-theme'));
      btn.addEventListener('click', function () {
        var nuevo = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        aplicar(nuevo);
        guardar(nuevo);
      });
    }

    // Botón "Contacto": lleva al pie de página y cierra el menú en celular
    document.querySelectorAll('a[href="#contacto"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var dest = document.getElementById('contacto');
        if (!dest) return;
        e.preventDefault();
        var menu = document.getElementById('menu'), bg = document.querySelector('.burger');
        if (menu && menu.classList.contains('open')) {
          menu.classList.remove('open');
          if (bg) { bg.setAttribute('aria-expanded', 'false'); bg.setAttribute('aria-label', 'Abrir menú'); }
        }
        var quieto = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        dest.scrollIntoView({ behavior: quieto ? 'auto' : 'smooth', block: 'end' });
      });
    });

    // 3) Menú hamburguesa
    var m = document.getElementById('menu');
    if (burger && m) {
      burger.addEventListener('click', function () {
        var o = m.classList.toggle('open');
        burger.setAttribute('aria-expanded', o);
        burger.setAttribute('aria-label', o ? 'Cerrar menú' : 'Abrir menú');
      });
      // Cerrar con Escape
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && m.classList.contains('open')) {
          m.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
          burger.setAttribute('aria-label', 'Abrir menú');
          burger.focus();
        }
      });
    }
  });
})();

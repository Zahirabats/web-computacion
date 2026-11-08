// proyecto.js — detalle de un proyecto (datos en proyectos-data.js)
// Campos opcionales por proyecto: año, enlace, fotos, videos, secciones (texto en párrafos con \n\n y lista opcional).
document.addEventListener('DOMContentLoaded', () => {
  const id = new URLSearchParams(window.location.search).get('id');
  const contenedor = document.getElementById('detalle-proyecto');
  const proyecto = baseDeDatosProyectos.find(p => p.id === id);

  if (proyecto) {
    const secciones = proyecto.secciones && proyecto.secciones.length
      ? proyecto.secciones
      : [{ titulo: 'Sobre el proyecto', texto: proyecto.descripcionLarga || '' }];

    const enlace = proyecto.enlace
      ? `<a class="btn-link" href="${proyecto.enlace.url}" target="_blank" rel="noopener">${proyecto.enlace.texto} <span aria-hidden="true">›</span></a>`
      : '';

    const galeria = proyecto.fotos && proyecto.fotos.length
      ? `<div class="galeria">${proyecto.fotos.map(f => `
          <figure>
            <a href="${f.src}" target="_blank" rel="noopener" aria-label="Ver foto completa: ${f.alt}">
              <img src="${f.src}" alt="${f.alt}" loading="lazy">
            </a>
            ${f.pie ? `<figcaption>${f.pie}</figcaption>` : ''}
          </figure>`).join('')}</div>`
      : '';

    const videos = proyecto.videos && proyecto.videos.length
      ? `<div class="videos">${proyecto.videos.map(v => `
          <figure>
            <video controls preload="metadata" playsinline${v.poster ? ` poster="${v.poster}"` : ''}>
              <source src="${v.src}" type="video/mp4">
              Tu navegador no puede reproducir este video.
            </video>
            ${v.titulo ? `<figcaption>${v.titulo}</figcaption>` : ''}
          </figure>`).join('')}</div>`
      : '';

    const meta = [
      proyecto.autor ? `<strong>Autor:</strong> ${proyecto.autor}` : '',
      proyecto.año ? `<strong>Año:</strong> ${proyecto.año}` : ''
    ].filter(Boolean).join(' | ');

    const parrafos = t => String(t || '').split(/\n\s*\n/).map(x => `<p>${x}</p>`).join('');
    const lista = l => l && l.length ? `<ul class="lista">${l.map(i => `<li>${i}</li>`).join('')}</ul>` : '';

    contenedor.innerHTML = `
      <a href="proyectos.html" class="back-link">‹ Volver a proyectos</a>
      <div class="proyecto-header">
        <h1>${proyecto.titulo}</h1>
        ${meta ? `<p class="meta">${meta}</p>` : ''}
        ${enlace}
      </div>
      ${galeria}
      ${videos}
      <div class="proyecto-body">
        ${secciones.map(s => `<h2>${s.titulo}</h2>${parrafos(s.texto)}${lista(s.lista)}`).join('')}
      </div>`;
    document.title = `${proyecto.titulo} · Escuela Técnica N°29 DE 6`;
  } else {
    contenedor.innerHTML = `
      <a href="proyectos.html" class="back-link">‹ Volver a proyectos</a>
      <div class="proyecto-header">
        <h1>Proyecto no encontrado</h1>
        <p>El proyecto que buscás no existe o fue eliminado.</p>
      </div>`;
  }
});

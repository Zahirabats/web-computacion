// proyecto.js — detalle de un proyecto (datos en proyectos-data.js)
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

    contenedor.innerHTML = `
      <a href="proyectos.html" class="back-link">‹ Volver a proyectos</a>
      <div class="proyecto-header">
        <h1>${proyecto.titulo}</h1>
        <p class="meta"><strong>Autor:</strong> ${proyecto.autor} | <strong>Año:</strong> ${proyecto.año}</p>
        ${enlace}
      </div>
      ${galeria}
      <div class="proyecto-body">
        ${secciones.map(s => `<h2>${s.titulo}</h2><p>${s.texto}</p>`).join('')}
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
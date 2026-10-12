// proyecto.js — detalle de un proyecto (datos en proyectos-data.js)
document.addEventListener('DOMContentLoaded', () => {
  const id = new URLSearchParams(window.location.search).get('id');
  const contenedor = document.getElementById('detalle-proyecto');
  const proyecto = baseDeDatosProyectos.find(p => p.id === id);

  if (proyecto) {
    contenedor.innerHTML = `
      <a href="proyectos.html" class="back-link">‹ Volver a proyectos</a>
      <div class="proyecto-header">
        <span class="badge">${proyecto.categoria}</span>
        <h1>${proyecto.titulo}</h1>
        <p class="meta"><strong>Autor:</strong> ${proyecto.autor} | <strong>Año:</strong> ${proyecto.año}</p>
      </div>
      <div class="proyecto-body">
        <h2>Sobre el proyecto</h2>
        <p>${proyecto.descripcionLarga}</p>
        <h3>Tecnologías utilizadas</h3>
        <ul class="tech-list">${proyecto.tecnologias.map(t => `<li>${t}</li>`).join('')}</ul>
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
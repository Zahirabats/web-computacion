// proyectos.js — catálogo con filtros (datos en proyectos-data.js)
const contenedorProyectos = document.getElementById('pg');
const contenedorFiltros = document.getElementById('chips');
const categorias = ["Todos", ...new Set(baseDeDatosProyectos.map(p => p.categoria))];
let categoriaActiva = "Todos";

function renderizarFiltros() {
  if (!contenedorFiltros) return;
  if (baseDeDatosProyectos.length === 0) { contenedorFiltros.innerHTML = ''; return; }
  contenedorFiltros.innerHTML = categorias.map(cat =>
    `<button class="chip" aria-pressed="${cat === categoriaActiva}" data-cat="${cat}">${cat}</button>`
  ).join('');
  contenedorFiltros.querySelectorAll('.chip').forEach(btn => {
    btn.addEventListener('click', () => {
      categoriaActiva = btn.dataset.cat;
      renderizarFiltros();
      renderizarProyectos();
    });
  });
}

function renderizarProyectos() {
  if (!contenedorProyectos) return;
  const lista = categoriaActiva === "Todos"
    ? baseDeDatosProyectos
    : baseDeDatosProyectos.filter(p => p.categoria === categoriaActiva);
  contenedorProyectos.innerHTML = lista.map(p => `
    <a class="card" href="proyecto.html?id=${encodeURIComponent(p.id)}">
      <span class="ico">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="3" y="4" width="18" height="12" rx="2"></rect>
          <path d="M8 20h8M12 16v4M9 9l-2 2 2 2M15 9l2 2-2 2"></path>
        </svg>
      </span>
      <h3>${p.titulo}</h3>
      <p>${p.descripcion}</p>
      <span class="go">Ver detalles <span aria-hidden="true">›</span></span>
    </a>`).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderizarFiltros();
  renderizarProyectos();
});
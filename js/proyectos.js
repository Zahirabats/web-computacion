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
      <h3>${p.titulo}</h3>
      <span class="go">Ver detalles <span aria-hidden="true">›</span></span>
    </a>`).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderizarFiltros();
  renderizarProyectos();
});
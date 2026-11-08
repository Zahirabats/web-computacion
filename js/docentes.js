// Base de datos de docentes (podés agregar, quitar o modificar los datos aquí)
// Lista de docentes. Por ahora está vacía, así que no se muestra ninguna tarjeta.
// Para agregar uno, descomentá el bloque, completalo y copialo tantas veces como haga falta.
const docentes = [
  // {
  //   nombre: "Nombre Apellido",
  //   materias: "Materia 1 / Materia 2",
  //   contacto: "mail@bue.edu.ar"
  // },
];

// Seleccionar el contenedor principal de la grilla
const contenedorDocentes = document.getElementById('dg');

// Función para generar el HTML de cada docente
function renderizarDocentes() {
  if (!contenedorDocentes) return;

  contenedorDocentes.innerHTML = docentes.map(docente => `
    <div class="card">
      <span class="ico">
        <!-- Ícono de usuario genérico -->
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </span>
      <h3>${docente.nombre}</h3>
      <p><strong>Materias:</strong> ${docente.materias}</p>
      <a href="mailto:${docente.contacto}" class="go" aria-label="Enviar mail a ${docente.nombre}">
        ${docente.contacto} <span aria-hidden="true">›</span>
      </a>
    </div>
  `).join('');
}

// Ejecutar la función cuando el documento HTML termine de cargar
document.addEventListener('DOMContentLoaded', renderizarDocentes);
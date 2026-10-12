// plan.js

// Atajo para seleccionar elementos
const $ = q => document.querySelector(q);

// El ícono original de la materia (del código fuente)
const MI = '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/></svg>';

// Las materias reales separadas por año
const materiasPorAño = {
  '3er Año': [
    "Taller de Programación", "Taller de Tecnología de Control", "Taller de Diseño Multimedial", 
    "Matemática", "Lengua y Literatura", "Tecnología de la Representación", "Geografía", 
    "Historia", "Educación Física", "Inglés", "Física", "Química", "Educación Ciudadana"
  ],
  '4to Año': [
    "Laboratorio de Algoritmos y Estructura de Datos", "Organización de las computadoras", 
    "Base de Datos", "Proyecto Informático I", "Lógica Computacional", "Matemática", 
    "Lengua y Literatura", "Inglés", "Educación Física", "Historia", "Geografía"
  ],
  '5to Año': [
    "Laboratorio de Programación Orientada a Objetos", "Redes", 
    "Administración y Gestión de Bases de Datos", "Proyecto Informático II", "Análisis de Sistemas", 
    "Matemática", "Lengua y Literatura", "Inglés", "Educación Física", 
    "Economía y Gestión de las Organizaciones"
  ],
  '6to Año': [
    "Prácticas Profesionalizantes", "Administración de Redes", "Desarrollo de Sistemas", 
    "Programación sobre Redes", "Gestión de Procesos Productivos", "Matemática", 
    "Inglés", "Ciencia y Tecnología", "Ciudadanía y trabajo", "Educación Física"
  ]
};

// Función para dibujar las materias del año seleccionado
function drawM(añoSeleccionado) {
  const contenedor = $('#mats');
  if (!contenedor) return;
  
  const materias = materiasPorAño[añoSeleccionado] || [];
  
  contenedor.innerHTML = materias.map(materia => `
    <div class="mat">
      <i>${MI}</i>
      <b>${materia}</b>
    </div>
  `).join('');
}

// Función que maneja los botones (chips)
function chips(el, list, cur, fn) {
  if (!el) return;
  
  el.innerHTML = list.map(x => `<button class="chip" aria-pressed="${x === cur}">${x}</button>`).join('');
  
  el.querySelectorAll('.chip').forEach(c => {
    c.onclick = () => {
      el.querySelectorAll('.chip').forEach(o => o.setAttribute('aria-pressed', o === c));
      fn(c.textContent);
    };
  });
}

// Cuando la página carga, inicializa los botones y carga 3er Año por defecto
document.addEventListener('DOMContentLoaded', () => {
  const años = ['3er Año', '4to Año', '5to Año', '6to Año'];
  chips($('#years'), años, '3er Año', drawM);
  drawM('3er Año');
});
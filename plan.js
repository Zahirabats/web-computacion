// plan.js — materias por año, con un ícono que representa cada materia

const $ = q => document.querySelector(q);

// Íconos (trazo, viewBox 24x24), uno por materia
const ICONOS = {
  "Taller de Programación": '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>',
  "Taller de Tecnología de Control": '<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',
  "Taller de Diseño Multimedial": '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M10 9l5 3-5 3z"/>',
  "Tecnología de la Representación": '<path d="M4 4v16h16z"/><path d="M8 13v3h3"/>',
  "Laboratorio de Algoritmos y Estructura de Datos": '<circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v4M12 11l-6 6.3M12 11l6 6.3"/>',
  "Organización de las computadoras": '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
  "Base de Datos": '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  "Proyecto Informático I": '<path d="M9 4h6v3H9z"/><path d="M7 5.5H5V21h14V5.5h-2M9 12h6M9 16h4"/>',
  "Lógica Computacional": '<path d="M4 5h8a7 7 0 0 1 0 14H4z"/><path d="M1 9h3M1 15h3M19 12h4"/>',
  "Laboratorio de Programación Orientada a Objetos": '<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 12l9-5M12 12v10M12 12L3 7"/>',
  "Redes": '<circle cx="12" cy="12" r="2.5"/><circle cx="4.5" cy="5" r="2"/><circle cx="19.5" cy="5" r="2"/><circle cx="12" cy="20" r="2"/><path d="M6 6.5l4 4M18 6.5l-4 4M12 14.5V18"/>',
  "Administración y Gestión de Bases de Datos": '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  "Proyecto Informático II": '<path d="M9 4h6v3H9z"/><path d="M7 5.5H5V21h14V5.5h-2M9 12h6M9 16h4"/>',
  "Análisis de Sistemas": '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-5-5M8 11.5l2-2 1.5 1.5 2-2.5"/>',
  "Prácticas Profesionalizantes": '<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M10 21v-4h4v4"/>',
  "Administración de Redes": '<rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 17h.01M11 17h.01M8.5 10.5a5 5 0 0 1 7 0M5.5 7.5a9 9 0 0 1 13 0"/>',
  "Desarrollo de Sistemas": '<path d="M12 2l10 5-10 5L2 7z"/><path d="M2 12l10 5 10-5M2 17l10 5 10-5"/>',
  "Programación sobre Redes": '<path d="M7 18a4 4 0 0 1-.6-7.95A6 6 0 0 1 18 9.5 4.3 4.3 0 0 1 17.5 18z"/><path d="M10.5 12.5l-2 2 2 2M13.5 12.5l2 2-2 2"/>',
  "Gestión de Procesos Productivos": '<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="6.5"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1"/>',

  "Matemática": '<path d="M3 13h3l3 7 5-16h7"/>',
  "Física": '<circle cx="12" cy="12" r="1.5"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>',
  "Química": '<path d="M9 3h6M10 3v6l-5.5 10a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 9V3"/><path d="M7 15h10"/>',
  "Ciencia y Tecnología": '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z"/>',

  "Lengua y Literatura": '<path d="M12 7c-1.5-1.5-4-2-8-2v13c4 0 6.5.5 8 2 1.5-1.5 4-2 8-2V5c-4 0-6.5.5-8 2z"/><path d="M12 7v13"/>',
  "Geografía": '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  "Historia": '<path d="M6 3h12M6 21h12M7 3c0 6 5 6 5 9s-5 3-5 9M17 3c0 6-5 6-5 9s5 3 5 9"/>',
  "Educación Física": '<circle cx="15" cy="4" r="2"/><path d="M13 8l-2 6M13 8l4 2 3-1M13 8l-4 2-2 3M11 14l4 3-1 4M11 14l-3 4-4 1"/>',
  "Inglés": '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M8.5 10h7M8.5 13.5h4"/>',
  "Educación Ciudadana": '<path d="M3 21h18M5 21V10M9 21V10M15 21V10M19 21V10M2 10l10-7 10 7z"/>',
  "Economía y Gestión de las Organizaciones": '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/>',
  "Ciudadanía y trabajo": '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>'
};

// Ícono genérico (birrete) por si se agrega una materia nueva sin ícono
const GENERICO = '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5"/>';

const svg = dibujo =>
  `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${dibujo}</svg>`;

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

function drawM(año) {
  const contenedor = $('#mats');
  if (!contenedor) return;
  const materias = materiasPorAño[año] || [];
  contenedor.innerHTML = materias.map(nombre => {
    const dibujo = ICONOS[nombre] || GENERICO;
    return `
    <div class="mat">
      <i>${svg(dibujo)}</i>
      <b>${nombre}</b>
    </div>`;
  }).join('');
}

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

document.addEventListener('DOMContentLoaded', () => {
  const años = ['3er Año', '4to Año', '5to Año', '6to Año'];
  chips($('#years'), años, '3er Año', drawM);

  const mats = $('#mats');
  if (mats) {
    mats.setAttribute('aria-live', 'polite');
  }
  drawM('3er Año');
});

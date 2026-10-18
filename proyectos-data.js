// Única lista de proyectos: la usan proyectos.js (catálogo) y proyecto.js (detalle).
// Para agregar un proyecto, copiá un bloque, cambiá los datos y guardá las fotos en la carpeta .
// Campos opcionales: fotos, enlace, secciones (si no hay secciones se usa descripcionLarga).
const baseDeDatosProyectos = [
  {
    id: "tecnologia-para-todos",
    titulo: "Tecnología para Todos",
    categoria: "Software",
    año: "4to y 5to Año",
    autor: "Estudiantes de 4° y 5° año, con docentes tutores",
    descripcion: "Plataforma web colaborativa de aprendizaje técnico visual, hecha por estudiantes, para estudiantes y validada por docentes.",
    enlace: { texto: "Visitá nuestra página", url: "https://marcosbertoldi1.github.io/TPT---actualizacion--BBDD/index.html" },
    fotos: [
      { src: "tpt-stand.jpg", alt: "El equipo de Tecnología para Todos junto a su stand" },
      { src: "tpt-equipo.jpg", alt: "El equipo sosteniendo el cartel de la Feria de Educación, Artes, Ciencias y Tecnología" },
      { src: "tpt-mencion.jpg", alt: "Diploma y trofeo de Mención Especial 2025" },
      { src: "tpt-expotecnica.jpg", alt: "Stand del proyecto con videos de microclases en pantallas" }
    ],
    secciones: [
      {
        titulo: "Desarrollo del Proyecto",
        texto: "\"Tecnología para Todos\" (TPT) es una plataforma web colaborativa de aprendizaje técnico visual, desarrollada por estudiantes, para estudiantes y validada por docentes, orientada a reducir las barreras de comprensión en la educación técnica. Se consolidó como un Producto Mínimo Viable (PMV) que reúne materiales educativos visuales y accesibles, tales como videos explicativos, resúmenes visuales, mapas conceptuales y actividades interactivas. Estos recursos abarcan contenidos de materias fundamentales de la especialidad técnica, incluyendo microclases de Lógica Computacional, Redes, Laboratorio de POO y Base de Datos."
      },
      {
        titulo: "Metodología y Herramientas",
        texto: "El trabajo se organizó implementando metodologías ágiles inspiradas en Scrum y utilizando la aplicación Trello para el desglose y la gestión de tareas. La producción se realizó de forma colaborativa, donde los estudiantes de quinto año se encargaron del análisis, diseño y desarrollo de la plataforma, mientras que los alumnos de cuarto año participaron activamente en la creación de los materiales didácticos. Todo el contenido y los guiones fueron validados por docentes tutores especialistas de cada asignatura, como el profesor Sebastián Astesana. A nivel tecnológico, el equipo utilizó herramientas como Visual Studio Code y GitHub para el control de versiones, vinculando además la plataforma con Firebase para gestionar la autenticación de usuarios y limitar el acceso exclusivamente a correos institucionales. Para asegurar la mejora continua, se integraron herramientas como Padlet y botones de evaluación interactivos que permiten recibir retroalimentación directa y medir la comprensión de los usuarios."
      },
      {
        titulo: "Trayecto y Evolución",
        texto: "El camino del proyecto comenzó en el ciclo lectivo 2025 con la participación en la Feria de Educación, Artes, Ciencias y Tecnología, donde el equipo obtuvo una mención de honor a nivel jurisdiccional. En esa etapa inicial, el objetivo principal era favorecer la inclusión digital de la comunidad sorda mediante recursos visuales, subtítulos y la incorporación de Lengua de Señas Argentina (LSA). Durante el año 2026, el proyecto continuó exponiéndose en la Expotécnica y en nuevas instancias de Ferias de Ciencias, donde las devoluciones de los evaluadores resultaron fundamentales para mejorar la presentación del stand y organizar más eficientemente la información. Tras enfrentar dificultades para articular de forma sostenida con instituciones de la comunidad sorda y conseguir intérpretes, el equipo descubrió que las estrategias visuales diseñadas eran sumamente beneficiosas para una población mucho más amplia de estudiantes que presentaban dificultades de aprendizaje. Este hallazgo motivó una reformulación integral del enfoque, haciendo que el proyecto evolucionara hacia un sistema educativo de microclases destinado a la intensificación de saberes para todos los alumnos de escuelas técnicas."
      }
    ]
  }
];
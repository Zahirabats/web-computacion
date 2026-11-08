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
  },
{
  "id": "easynfc",
  "titulo": "EasyNFC",
  "categoria": "Hardware y Software",
  "año": "5to Año",
  "autor": "Consultora AssisTech (estudiantes de 5° 8va y 5° 5ta), con el profesor Alan Etkin",
  "descripcion": "Sistema de control de asistencia con tarjetas NFC y una página web: los alumnos apoyan su tarjeta en un lector y la asistencia queda registrada automáticamente.",
  "portada": "easynfc-segunda-instancia.jpg",
  "portadaPos": "50% 25%",
  "fotos": [
    {
      "src": "easynfc-primera-instancia.jpg",
      "alt": "El equipo de EasyNFC junto a su stand en la primera instancia de la Feria de Ciencias",
      "pie": "Primera instancia · Escuela Técnica N° 9 «Ing. Luis A. Huergo» (3 de julio de 2026)"
    },
    {
      "src": "easynfc-segunda-instancia.jpg",
      "alt": "El equipo de EasyNFC junto a su stand en la segunda instancia de la feria",
      "pie": "Segunda instancia · Biblioteca del Parque de la Estación (fines de agosto de 2026)"
    },
    {
      "src": "easynfc-mencion.jpg",
      "alt": "Diploma de Mención Especial otorgado a EasyNFC por el Ministerio de Educación de la Ciudad",
      "pie": "Mención Especial · 28 de agosto de 2026"
    }
  ],
  "secciones": [
    {
      "titulo": "Desarrollo del Proyecto",
      "texto": "EasyNFC, desarrollado por la consultora AssisTech, es un sistema para gestionar las asistencias, las faltas y las llegadas tarde de los alumnos de una forma más automatizada y ágil, y para reducir el margen de error de los preceptores a la hora de pasar lista. El control se realiza mediante una página web a la que acceden alumnos, profesores y preceptores. Los alumnos apoyan una tarjeta NFC (o, en su defecto, la tecnología de su celular) en un lector RFID conectado a un circuito, y el registro queda guardado en la base de datos."
    },
    {
      "titulo": "Metodología y Herramientas",
      "texto": "El trabajo se organizó con la metodología Agile, estudiada junto al profesor Alan Etkin: en cada Sprint se revisaban los incrementos y lo que faltaba desarrollar, y el proceso continúa hasta hoy. Para el desarrollo se usaron Python (une el circuito con la base de datos), HTML y PHP (para la página), Arduino IDE (para la placa Arduino y luego el ESP32) y MySQL (para la base de datos), entre otras herramientas. El circuito tiene como componentes principales:",
      "lista": [
        "<strong>Chip ESP32 Dev Módulo 8:</strong> el cerebro del circuito.",
        "<strong>Lector RFID:</strong> detecta la tarjeta o el celular del alumno.",
        "<strong>Protoboard:</strong> puente entre los componentes.",
        "<strong>Cables macho-macho y macho-hembra:</strong> medio de conexión.",
        "<strong>Buzzer:</strong> emite una señal sonora.",
        "<strong>LEDs:</strong> indican el estado del registro del alumno.",
        "<strong>Resistencias:</strong> controlan el encendido y apagado de los LEDs."
      ]
    },
    {
      "titulo": "Trayecto y Evolución",
      "texto": "El proyecto surgió a inicios del ciclo lectivo 2025, cuando alumnos de 5to 8va comenzaron a desarrollarlo junto al profesor Alan Etkin con otra idea: una app móvil que mostrara un código QR de verificación para registrar faltas, asistencias y llegadas tarde. En 2026 fue retomado por los alumnos de 5to 8va de ese ciclo, que modificaron gran parte de lo planteado y optaron por algo más eficiente, no necesariamente más sencillo, pero viable. A medida que avanzaba el desarrollo se sumaron los alumnos del turno tarde de 5to 5ta para participar de la feria de ciencias, donde se ultimaron los detalles y se definió por completo el proyecto.\n\nLos primeros prototipos se presentaron en la Feria de Ciencias 2026. La primera instancia fue el 3 de julio en la Escuela Técnica N° 9 «Ing. Luis A. Huergo» y la segunda, a fines de agosto, en la Biblioteca del Parque de la Estación. Si bien no pasó a la instancia nacional, EasyNFC recibió una Mención Especial del Ministerio de Educación de la Ciudad en la instancia jurisdiccional de la Feria de Educación, Artes, Ciencias y Tecnología, junto a otro proyecto."
    }
  ]
},
{
  "id": "edu-tech-hub",
  "titulo": "EDU-TECH HUB",
  "categoria": "Software",
  "autor": "Estudiantes de la especialidad de Computación",
  "descripcion": "Plataforma educativa que reúne en un solo lugar las herramientas de alumnos, docentes y administradores: materias, trabajos, foro, calendario y boletín.",
  "portada": "edutech-poster.jpg",
  "videos": [
    {
      "src": "edutech-backstage.mp4",
      "poster": "edutech-poster.jpg",
      "titulo": "Backstage de EDU-TECH HUB"
    }
  ],
  "secciones": [
    {
      "titulo": "Desarrollo del Proyecto",
      "texto": "EDU-TECH HUB surgió de la necesidad de mejorar cómo se organiza y se comparte la información en las instituciones educativas. La entrega de trabajos, la comunicación entre docentes y alumnos, la publicación de materiales y el seguimiento de las calificaciones suelen repartirse entre distintas herramientas, así que la propuesta fue reunir todo en un solo lugar, adaptable a distintos niveles de enseñanza, desde el nivel inicial hasta el terciario, y con cada institución administrando su propia información.\n\nEl proyecto comenzó con una etapa de investigación y planificación, donde se identificaron las necesidades de alumnos, docentes y administradores; después se definieron las funcionalidades y se diseñó la interfaz. Se fueron incorporando estos módulos:",
      "lista": [
        "<strong>Usuarios y roles:</strong> acceso diferenciado para alumnos, docentes y administradores.",
        "<strong>Materias y clases:</strong> organización de cursos, divisiones y asignaturas.",
        "<strong>Trabajos y materiales:</strong> publicación de actividades, entrega de trabajos y consulta de calificaciones.",
        "<strong>Foro y tablón:</strong> espacios de comunicación y avisos.",
        "<strong>Calendario:</strong> fechas importantes y actividades escolares.",
        "<strong>Boletín:</strong> consulta de calificaciones y seguimiento académico.",
        "<strong>Rendimiento académico:</strong> herramientas para que los docentes analicen el desempeño de sus alumnos."
      ]
    },
    {
      "titulo": "Aspectos Técnicos y Diferenciales",
      "texto": "El desarrollo implicó trabajar en la estructura de las bases de datos, la conexión entre el frontend y el backend, la seguridad de las cuentas y la corrección de errores. A medida que el proyecto avanzó se hicieron cambios tecnológicos y mejoras en la arquitectura para lograr un sistema más organizado, mantenible y preparado para futuras ampliaciones.\n\nLo más distintivo de EDU-TECH HUB es que centraliza las herramientas educativas en una única plataforma, y que su arquitectura permite que cada institución administre sus propios datos con su servidor y su base de datos local, sin depender exclusivamente de servicios externos o de plataformas de terceros. También se proyectó incorporar a Alfred, un asistente de inteligencia artificial pensado para ayudar dentro del entorno educativo."
    },
    {
      "titulo": "Trayecto y Evolución",
      "texto": "EDU-TECH HUB participó de la Feria de Ciencias, donde se presentó como un proyecto tecnológico orientado a mejorar la organización y la gestión de las instituciones educativas, y avanzó en dos oportunidades hasta la instancia jurisdiccional. Esas participaciones permitieron explicar su funcionamiento, recibir devoluciones que ayudaron a su evolución y fortalecer las habilidades de presentación, comunicación y defensa de un proyecto frente a evaluadores y público.\n\nHoy el proyecto está en una etapa avanzada, con sus principales módulos implementados y una estructura funcional. Los objetivos a futuro son seguir mejorando el rendimiento, la seguridad, la experiencia de usuario y la documentación técnica, ampliar las herramientas de seguimiento académico, sumar nuevas funcionalidades y facilitar su implementación en distintas instituciones."
    },
    {
      "titulo": "Aprendizajes",
      "texto": "El desarrollo permitió aplicar conocimientos de programación, diseño de interfaces, bases de datos, redes, arquitectura de software y organización de proyectos. También mostró que desarrollar un sistema no consiste solo en escribir código: hace falta investigar necesidades reales, planificar, probar, detectar errores y mejorar constantemente."
    }
  ]
}
];

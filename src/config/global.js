export default {
  global: {
    componenteFormativo: 'Patronaje de falda',
    descripcionCurso:
      'En el desarrollo de proyectos de confección de prendas es importante comprender los métodos y procedimientos adecuados que permitan elaborar prendas con altos estándares de calidad, partiendo de la toma de medidas y de la interpretación antropomórfica, de la elaboración de patrones, del trazado, del corte y de la confección. Este componente formativo comprende los elementos y temáticas de orden técnico para el desarrollo del patrón de falda básica.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Matemática y sistema métrico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Fracciones',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Sistema métrico',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Antropometría y anatomía: concepto y aplicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Conceptos básicos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Antropometría, anatomía y ejes del cuerpo',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Normalización de tallas femeninas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Medidas del cuerpo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Toma de medidas',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Geometría: conceptos, ángulos, líneas y curvas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Patrón: concepto y características',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Materiales y herramientas para patronaje',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Convenciones',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Desarrollo patrón base de falda',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo:
              'Industrialización de patrones: información técnica y simbología',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  //todo MODIFICAR LOS CREDITOS CUANDO SE ACTUALICEN
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Gina Elizabeth Ortiz García',
        cargo: 'Experta temática',
        centro: 'Centro de Manufactura en Textil y Cuero',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: ['Luis Fernando Botero Mendoza', 'Oscar Absalón Guevara'],
        cargo: 'Diseñadores instruccionales',
        centro: 'Centro de Gestión Industrial',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisión metodológica y pedagógica',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluadora Instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web y Producción Audiovisual',
      },
      {
        nombre: [
          'Andrés Herrera',
          'Carmen Martinez',
          'Carlos Eduardo Garavito',
          'Gilberto Junior Rodriguez Rodriguez',
          'Laura Murcia Pardo',
          'Lina Perez',
          'Maria Carolina Tamayo',
          'Ricardo Vasquez',
          'Wilson Andrés Arenales Caceres',
          'Zuleidy María Ruiz Torres',
        ],
        cargo: 'Diseño web y Producción Audiovisual',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Desarrollo Front-End',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Validación y vinculación en plataforma LMS'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación -ICONTEC-. (1995). Norma técnica colombiana NTC-8559. Fabricación de vestuario y estudios antropométricos dimensiones corporales.',
    },
    {
      referencia: 'Monterey Institute. (2012). El sistema métrico. ',
      link:
        'https://www.montereyinstitute.org/courses/DevelopmentalMath/TEXTGROUP-1-8_RESOURCE/U06_L2_T1_text_final_es.html',
    },
    {
      referencia:
        'Padilla, S. (2018, Noviembre 5). Bases matemáticas para patronaje. Lección # 1. [Web log post]. Aprende con Sandra Padilla',
      link:
        'https://www.aprendeconsandrapadilla.com.co/2018/11/bases-matematicas-para-patronaje.html ',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. (2011). Manual de patronaje básico e interpretación de diseños. Centro de Manufactura en Textiles y Cuero - Regional Distrito Capital. ',
      link:
        'https://repositorio.sena.edu.co/bitstream/11404/4725/1/Manual_patronaje_basico_interpretacion_disenos.PDF',
    },
    {
      referencia:
        'Valero, C., E. (s.f.).  Antropometría. Centro Nacional de Nuevas Tecnologías. Instituto Nacional de Seguridad e Higiene en el Trabajo. Ministerio de Trabajo e Inmigración, España.',
    },
  ],
  glosario: [
    {
      termino: 'Despiece',
      significado:
        'División de una prenda patronada o confeccionada en cada una de las partes que la componen.',
    },
    {
      termino: 'Moldería',
      significado:
        'Conjunto de piezas específicas por talla que conforma un producto o diseño.',
    },
    {
      termino: 'Muestra física ',
      significado:
        'Prototipo de un producto “prenda que reúne todos los requisitos especificados por un cliente” (ICONTEC, 1995).',
    },
    {
      termino: 'Patrón',
      significado:
        'Forma, plantilla o guía que se usa para cortar las distintas piezas que forman una prenda.  El patón reúne el estilo y detalle de una prenda, se obtiene a partir de otro patrón con las medidas corporales.',
    },
    {
      termino: 'Patronaje',
      significado:
        'Construcción de un plano o piezas que conforman una prenda y que servirán como plantillas para realizar el corte de un diseño establecido. Su producto es un patrón guía o base. ',
    },
  ],
  complementario: [
    {
      texto:
        'Servicio Nacional de Aprendizaje. (2011). Manual de patronaje básico e interpretación de diseños. Centro de Manufactura en Textiles y Cuero - Regional Distrito Capital.',
      tipo: 'Documento PDF',
      descarga: 'downloads/MANUAL_PATRONAJE_SENA.pdf',
    },
    {
      texto:
        'Valero, C., E. (s.f.).  Antropometría. Centro Nacional de Nuevas Tecnologías. Instituto Nacional de Seguridad e Higiene en el Trabajo. Ministerio de Trabajo e Inmigración, España.',
      tipo: 'Documento PDF',
      descarga: 'downloads/Antropometria.pdf',
    },
  ],
}

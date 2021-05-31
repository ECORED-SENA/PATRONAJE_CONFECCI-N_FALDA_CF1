<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 5
      .h3 Patrón: concepto y características
    figure.mb-5
      img(src='@/assets/curso/img63.jpg', alt='Texto que describa la imagen')
    p.mb-5 El patronaje es la técnica mediante la cual se obtiene las plantillas (patrones o moldes) con las que se cortan las telas para posteriormente ensamblar y obtener una prenda. Según lo revisado hasta ahora se puede ver que este proceso parte de la toma de medidas del cliente, teniendo como referencia el diseño de la prenda a realizar, para luego ser interpretado sobre el papel.
      br
      br
      |Lo que se obtiene de este proceso es el patrón, entendido como la representación gráfica de la estructura de una prenda de vestir, que constituye la base para las posteriores fases de trazo, corte y confección del producto. Al desglose de este patrón se le llama despiece, del cual se extraen cada una de las piezas que al ser cortadas y confeccionadas conformarán la prenda de vestir.
    #t_5_1.titulo-segundo
      .h4 5.1. Materiales y herramientas para patronaje
    p.mb-5 Para dar inicio al proceso de patronaje es importante conocer los materiales y herramientas necesarias para el desarrollo del patrón de falda básica. 
    .h6.mb-5 Materiales.
    SlyderB.mb-5(:datos="datosSlyder1")
    p.fst-italic.mb-5.text-center Nota: Es necesario conocer los materiales para el desarrollo del patrón. 
    .h6.mb-5 Herramientas
    SlyderB.mb-5(:datos="datosSlyder2")
    p.fst-italic.mb-5.text-center Nota: Es necesario conocer las herramientas para el desarrollo del patrón. 
    #t_5_2.titulo-segundo
      .h4 5.2. Convenciones
    p.mb-5 Con el fin de facilitar el desarrollo técnico de los patrones es necesario conocer y manejar las diferentes simbologías, que permiten entender de una forma práctica y ágil la construcción de las gráficas y, así mismo, preparar el patrón para el siguiente proceso.
      br
      br
      |En la siguiente tabla se ven las convenciones que ayudan a su identificación.
    .tabla-a.mb-5 
      table.table1
        caption Tabla 4: Convenciones para identificar los patrones
        thead
          tr.encabezado--morado
            th.p--blanco Simbolo
            th.p--blanco Nombre
            th.p--blanco Descripción
            th.p--blanco Uso
        tbody
          tr
            td 
              img(src='@/assets/curso/img76.svg', alt='Texto que describa la imagen' style="width: 34px").mx-auto
            td.p-5 Hilo de tela
            td Línea recta terminada con flechas en ambos extremos.
            td Nos indica la posición del patrón con respecto al hilo de la tela, va paralela al hilo de urdimbre.    
          tr
            td 
              img(src='@/assets/curso/img77.svg', alt='Texto que describa la imagen' style="width: 34px").mx-auto
            td.p-5 Corte al sesgo o bies
            td Línea recta diagonal terminada con flechas en ambos extremos.
            td Indica la inclinación a 45º del patrón en la tela.    
          tr
            td 
              img(src='@/assets/curso/img78.svg', alt='Texto que describa la imagen' style="width: 34px").mx-auto
            td.p-5 Dobles de tela
            td Tres circunferencias pequeñas dispuestas en forma de triángulo.
            td Indica la posición de un lado del patrón que debe estar sobre el dobles o lomo de la tela.    
          tr
            td 
              img(src='@/assets/curso/img79.svg', alt='Texto que describa la imagen' style="width: 34px").mx-auto
            td.p-5 Línea de corte
            td Tijeras.
            td Se coloca sobre la      línea donde se debe hacer el corte.    
          tr
            td 
              img(src='@/assets/curso/img80.svg', alt='Texto que describa la imagen' style="width: 34px").mx-auto
            td.p-5 Piquetes
            td Línea recta en forma de T.
            td Se traza sobre la línea de corte para empalmar costuras con precisión.    
          tr
            td 
              img(src='@/assets/curso/img81.svg', alt='Texto que describa la imagen' style="width: 34px").mx-auto
            td.p-5 Ubicación de botones
            td Es una X del tamaño del botón a utilizar.
            td Indica el tamaño y posición de botones.    
          tr
            td 
              img(src='@/assets/curso/img82.svg', alt='Texto que describa la imagen' style="width: 34px").mx-auto
            td.p-5 Ubicación del ojal
            td Es un segmento delimitado por el ancho del ojal.
            td Indica la posición y el tamaño del ojal.    
          tr
            td 
              img(src='@/assets/curso/img83.svg', alt='Texto que describa la imagen' style="width: 34px").mx-auto
            td.p-5  Costuras
            td Indica la línea de acabado.
            td     
          tr
            td 
              img(src='@/assets/curso/img84.svg', alt='Texto que describa la imagen' style="width: 34px").mx-auto
            td.p-5  Puntos internos
            td Son perforaciones internas.
            td Sirven como guía para la ubicación de  piezas internas como bolsillos, botones, ojales, entre otras.  
    p.fst-italic.mb-5.text-center Nota: Conocer las simbologías permite preparar el patrón para el siguiente proceso.
    #t_5_3.titulo-segundo
      .h4 5.3. Desarrollo patrón base de falda  
    p.mb-5 Para dar orden a este proceso es necesario hacer una orientación y un paso a paso, tal como se describe en el siguiente instructivo que lo lleva a la elaboración del patrón de falda básica.
    .tarjeta.tarjeta--morada.p-4.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/img85.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Instructivo – Patrón falda básica
              p Para dar orden a este proceso es necesario hacer una orientación y un paso a paso, tal como se describe en el siguiente instructivo que lo lleva a la elaboración del patrón de falda básica. 
            .col-sm-auto
              a.boton.boton--a(:href="obtenerLink('/downloads/Instructivo_PATRON_FALDA_BÁSICA.pdf')"   target="_blank")
                span Descargar
                i.fas.fa-file-download
    p.mb-5 Adicionalmente, para verificar los pasos en la elaboración del patrón frente consulte el video “Elaboración patrón delantero”.

    //todo CAMBIAR LOS VIDEOS POR EL ENLACE CORRECTO UNA VEZ SUBIDOS -------------------------------------------------------------------------------------------------------------------------------

    figure
    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 Adicionalmente, para verificar los pasos en la elaboración del patrón frente consulte el video “Elaboración patrón trasero”.
    figure
    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 Para finalizar esta elaboración es necesario que revise el material del siguiente video, que muestra los trazos de la pretina.”.
    figure.mb-5
    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    #t_5_4.titulo-segundo
      .h4 5.4. Industrialización de patrones: información técnica y simbología
    p.mb-5 La industrialización de los patrones es la marcación que se hace sobre cada una de las piezas que conforman el patrón, allí se describe la información técnica que se debe tener en cuenta al momento de realizar el trazo y corte de la prenda en la tela:
    ol.lista-ol--cuadro.mb-5
        li 
          .lista-ol--cuadro__vineta
            span A
          | Nombre de la pieza. 
        li 
          .lista-ol--cuadro__vineta
            span B
          | Referencia.
        li 
          .lista-ol--cuadro__vineta
            span C
          | Talla.
        li 
          .lista-ol--cuadro__vineta
            span D
          | Nombre del patronista.
        li 
          .lista-ol--cuadro__vineta
            span E
          | Numero de veces a cortar.
        li 
          .lista-ol--cuadro__vineta
            span F
          | Consecutivo de piezas.
        li 
          .lista-ol--cuadro__vineta
            span G
          | Piquetes de confección.
        li 
          .lista-ol--cuadro__vineta
            span I
          | Líneas de aplome.
    p.mb-5 A cada una de las piezas que componen el patrón de la falda básica se le debe hacer la industrialización como se muestra a continuación:
    .tarjeta.tarjeta--morada.p-4.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/img85.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 PDF - Pieza e industrialización
              p Piezas que componen el patrón de la falda básica se le debe hacer la industrialización.
            .col-sm-auto
              a.boton.boton--a(:href="obtenerLink('/downloads/Tabla_5_Pieza_e_industrialización.pdf')"   target="_blank")
                span Descargar
                i.fas.fa-file-download
    P.mb-5 Para entender de mejor forma el concepto de la industrialización debe revise el material del siguiente video:
    
    //todo CAMBIAR LOS VIDEOS POR EL ENLACE CORRECTO UNA VEZ SUBIDOS -------------------------------------------------------------------------------------------------------------------------------

    figure
    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/g03DnF8CVng" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    datosSlyder1: [
      {
        titulo: 'Pliegos de papel manifold, bond o periódico.',
        texto: 'Hoja de pasta delgada hecha de fibras vegetales.',
        imagen: require('@/assets/curso/img64.jpg'),
      },
      {
        titulo: 'Cartulina.',
        texto: 'Cartón delgado para trazar la modelería.',
        imagen: require('@/assets/curso/img65.jpg'),
      },
      {
        titulo: 'Lapiz negro.',
        texto:
          'Utensilio para dibujar o escribir formado por un cilindro de madera, con una barra de grafito en su interior.',
        imagen: require('@/assets/curso/img66.jpg'),
      },
      {
        titulo: 'Portaminas 0,7 mm.',
        texto:
          'Instrumento de metal, madera o plástico que contiene minas de recambio y se utiliza como lápiz.',
        imagen: require('@/assets/curso/img67.jpg'),
      },
      {
        titulo: 'Micropuntas de colores.',
        texto:
          'Instrumento para escribir, tiene en su interior un tubo con tinta especial y una punta muy aguda para mayor precisión en los trazos.',
        imagen: require('@/assets/curso/img68.jpg'),
      },
      {
        titulo: 'Borrador.',
        texto: 'Goma que sirve para borrar lo escrito.',
        imagen: require('@/assets/curso/img69.jpg'),
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Piqueteador de moldes.',
        texto: 'Utilizado para hacer la perforación de los piquetes.',
        imagen: require('@/assets/curso/img70.jpg'),
      },
      {
        titulo: 'Punzón.',
        texto:
          'Utilizado para hacer la perforación interna de los moldes, por ejemplo, en los vértices de pinza.',
        imagen: require('@/assets/curso/img71.jpg'),
      },
      {
        titulo: 'Tijeras para cortar papel.',
        texto:
          'Utilizadas para cortar los patrones, cuando han sido delineados.',
        imagen: require('@/assets/curso/img72.jpg'),
      },
      {
        titulo: 'Rodaja.',
        texto:
          'Usada para mover un molde a la tela o para hacer señales en la costura.',
        imagen: require('@/assets/curso/img73.jpg'),
      },
      {
        titulo: 'Juego de reglas para patronaje.',
        texto:
          '<ol> <li> 1. Escuadra de 60 cm aprox.</li> <li>2. Curva de cadera</li> <li>3. Curva de tiro</li> <li>4. Curva auxiliar</li> <li>5. Sisómetro</li> </ol>',
        imagen: require('@/assets/curso/img74.jpg'),
      },
      {
        titulo: 'Cinta métrica.',
        texto:
          'Utilizada para medir contornos y largos sobre el cuerpo humano.',
        imagen: require('@/assets/curso/img75.jpg'),
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 4
      .h3 Geometría: conceptos, ángulos, líneas y curvas
    figure.mb-5
          img(src='@/assets/curso/img42.jpg', alt='Texto que describa la imagen')
    p.mb-5 La geometría es una rama de la matemática que estudia las propiedades y las medidas de una figura en un plano o un espacio. Las prendas de vestir que comúnmente se trabajan están construidas a través de figuras geométricas, por ejemplo, la falda en un plano bidimensional es un rectángulo o en un plano tridimensional es un cilindro.   
      br
      br
      |Existen dos formas de trabajar el patrón de una falda; la primera puede ser a través de la construcción de un plano y la segunda, es trabajando sobre el cuerpo o modelado de maniquí.
      br
      br
      |La construcción de los patrones en un plano se hace a través de figuras y líneas geométricas, que coordinadas entre sí, generan la forma de las prendas que en su uso final se amoldarán al cuerpo.   
      br
      br
      |En este punto se trabajan los conceptos básicos de claves geométricas para el desarrollo de los patrones.
    .h5.mb-4 Geometría básica 
    .span--morado.px-2.py-2.mb-3
      .h5.my-auto Líneas
    p.mb-5.ms-4 Una línea se define como la distancia entre dos puntos y puede ser trazada hacia diferentes direcciones con escuadra o regla, pueden ser:
    TabsA.mb-5
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Horizontales")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img44.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Horizontales
            p Son lineas en dirección recta que se asemejan al horizonte.
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Verticales")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img43.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Verticales
            p Son líneas en dirección recta de arriba hacia abajo o de abajo hacia arriba.
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Diagonales")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img45.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Diagonales
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Líneas paralelas")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img46.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Líneas paralelas
            p Son aquellas líneas rectas que conservan la misma distancia entre ellas y por más que se prolonguen nunca se van a unir.
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Líneas perpendiculares")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img47.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Líneas perpendiculares
            p Son dos líneas rectas que se unen en un punto y conforman un ángulo de 90 grados, también llamado ángulo recto.
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Curva")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img48.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Curva
            p Línea que se va apartando de manera continua de la dirección recta sin formar ángulos.
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Semicurva")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img49.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Semicurva
            p Línea que se aísla de sus extremos ligeramente para dejar de ser recta.
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Cóncavo")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img50.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Cóncavo
            p Curva que va hacia adentro. 
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Convexo")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img51.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Convexo
            p Línea que se aísla de sus extremos ligeramente para dejar de ser recta.
    .span--morado.px-2.py-2.mb-3
      .h5.my-auto Ángulos
    p.mb-5.ms-4 Se pueden construir a partir del corte y unión de dos líneas, la intersección de estas dos líneas se denomina vértice y las líneas son los lados del ángulo. Pueden ser:

    SlyderB.mb-5(:datos="datosSlyder")
    .span--morado.px-2.py-2.mb-3
      .h5.my-auto Figuras geométricas
    p.mb-5.ms-4 Generalmente son formas cerradas y se forman por líneas o círculos. Las más conocidas son:
    .contenedor-imagenes-texto.m-auto.p-4
      .imagenes-texto.p-2.mx-auto
        figure.mb-3
          img(src='@/assets/curso/img59.svg', alt='Texto que describa la imagen' style='width: 260px').mx-auto
        h6 Cuadrado
        p Es aquella figura que está conformada por 4 líneas rectas de igual medida y, que a su vez conforman 4 ángulos rectos.
      .imagenes-texto.p-2.mx-auto
        figure.mb-3
          img(src='@/assets/curso/img60.svg', alt='Texto que describa la imagen' style='width: 260px').mx-auto
        h6 Rectángulo
        p Figura formada por 4 líneas rectas, dos líneas más cortas opuestas de igual medida que las otras dos, que forman ángulos rectos en sus cuatro uniones.
      .imagenes-texto.p-2.mx-auto
        figure.mb-3
          img(src='@/assets/curso/img61.svg', alt='Texto que describa la imagen' style='width: 260px').mx-auto
        h6 Triángulo
        p Figura formada por 3 líneas rectas que se unen en unos ángulos.
      .imagenes-texto.p-2.mx-auto
        figure.mb-3
          img(src='@/assets/curso/img62.svg', alt='Texto que describa la imagen' style='width: 260px').mx-auto
        h6 Circunferencia
        p Es una línea cerrada con todos los puntos a igual distancia de su centro.





</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Ángulo recto',
        texto:
          'Conformado por una línea horizontal, que se intercepta con una línea vertical, el punto donde se interceptan estas dos líneas se le llama vértice y la abertura es de 90 grados.',
        imagen: require('@/assets/curso/img52.svg'),
      },
      {
        titulo: 'Ángulo agudo ',
        texto: 'Es aquel que su abertura mide menos de 90 grados.',
        imagen: require('@/assets/curso/img53.svg'),
      },
      {
        titulo: 'Ángulo obtuso ',
        texto:
          'Es aquel que su abertura mide más de 90 grados y menos de 180 grados. ',
        imagen: require('@/assets/curso/img54.svg'),
      },
      {
        titulo: 'Ángulo llano',
        texto:
          'Es el equivalente a dos ángulos rectos, siempre mide 180 grados.',
        imagen: require('@/assets/curso/img55.svg'),
      },
      {
        titulo: 'Ángulo complementario ',
        texto: 'Son aquellos que sumados dan 90 grados.',
        imagen: require('@/assets/curso/img56.svg'),
      },
      {
        titulo: 'Ángulo suplementario',
        texto: 'Son aquellos ángulos que sumados dan 180 grados. ',
        imagen: require('@/assets/curso/img57.svg'),
      },
      {
        titulo: 'Ángulo completo',
        texto: 'Es aquel que mide 360 grados.',
        imagen: require('@/assets/curso/img58.svg'),
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>

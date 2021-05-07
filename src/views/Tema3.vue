<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 3
      .h3 Normalización de tallas femeninas
    figure.mb-5
          img(src='@/assets/curso/img17.jpg', alt='Texto que describa la imagen')
    p.mb-5 En la construcción de los patrones son importantes los datos anatómicos, las medidas de cuerpo identificadas en un perfil antropométrico permiten caracterizar los diferentes cuerpos, facilitando que las prendas se ajusten a las necesidades del cuerpo; los puntos anatómicos establecen una metodología de toma de medidas femeninas.
    
    #t_3_1.titulo-segundo
      .h4 3.1 Medidas del cuerpo
    p.mb-5 La importancia de las medidas radica en lograr el diseño de prendas de vestir para los clientes indistintamente de sus dimensiones corporales. Es así, como contando con las medidas, es posible definir una talla y la posibilidad de construir la tabla de medidas.
    .h5 Puntos de referencia corporales anatómicos
    p.mb-5 Para unificar una metodología de toma de medidas, es necesario identificar los puntos anatómicos del cuerpo.
      br
      br
      |Los puntos de referencia se pueden observar en las siguientes figuras, asi:
    ol.lista-ol--cuadro
        li 
          .lista-ol--cuadro__vineta
            span A
          .h5 Anatómico frontal 
        figure.mb-5
            img(src='@/assets/curso/img18.svg', alt='Texto que describa la imagen')
        li 
          .lista-ol--cuadro__vineta
            span B
          .h5 Anatómico lateral 
        figure.mb-5
            img(src='@/assets/curso/img19.svg', alt='Texto que describa la imagen')
        li 
          .lista-ol--cuadro__vineta
            span C
          .h5 Anatómico posterior
        figure.mb-5
            img(src='@/assets/curso/img20.svg', alt='Texto que describa la imagen')
    #t_3_2.titulo-segundo
      .h4 3.2 Toma de medidas
    p.mb-2 Para iniciar con el proceso de patronaje de las prendas se requiere el análisis de las proporciones del cuerpo, el cual se realiza a través de una toma de medidas, para ello es importante referirse a la norma técnica colombiana del ICONTEC NTC - ISO 8559, la cual brinda puntos de referencia corporales que se deben hacer en la toma de medidas para posteriormente llevarlos a la realización de la prenda. 
      br
      br
      |De igual forma, se refiere a la clasificación de medidas anatómicas y aquellas que la componen:
    ul.lista-ul--color.mb-5
        li 
          i.fas.fa-check
          p
            b Medidas horizontales: 
            b-none son aquellas como los contornos y anchos. 
        li 
          i.fas.fa-check
          p
            b Medidas verticales:
            b-none son los largos y altos. 
    .h5 3.2.1. Clasificación de las medidas
    p.mb-3 Las medidas se clasifican así:
    ul.lista-ul--color.mb-5
        li 
          i.fas.fa-check
          p
            b Largos: 
            b-none estas medidas se toman en sentido vertical. Ejemplo: talles, los largos de prendas y las alturas.
        li 
          i.fas.fa-check
          p
            b Anchos:
            b-none  estas medidas se toman en sentido horizontal de un punto a otro. Ejemplo: ancho pecho, ancho espalda, separación de busto. Se aplican al patrón en proporción ½.
        li 
          i.fas.fa-check
          p
            b Contornos:
            b-none  estas medidas se toman de manera circular. El punto de llegada es el mismo punto de partida.
    p.mb-5 Este tipo de medidas también se denominan medidas perimetrales porque rodean totalmente el volumen del cuerpo y aquí se encuentran los contornos, como por ejemplo el contorno de cuello, contorno de pecho, contorno de busto, contorno de Submamario, contorno de cintura y contorno de cadera entre otros. Se aplican al patrón en proporción ¼.
    .h5 3.2.2. Instructivo para la toma de medidas femeninas.
    p.mb-3 La metodología de toma de medidas es un paso fundamental para realizar un buen trazo de patrones, debe realizarse de manera cuidadosa y precisa teniendo en cuenta todas las observaciones que se hacen en esta presentación.
      br
      br
      |Elija el tipo de medida que quiere tomar:
    ul.lista-ul--color.mb-5
        li 
          i.fas.fa-check
          p
            b Medidas verticales 
        li 
          i.fas.fa-check
          p
            b Medidas horizontales 
    .h5 Medidas verticales. 
    p.mb-5 Son las medidas asociadas a los largos, se toman de arriba hacia abajo Ejemplo: talles, largos y alturas.
      br
      |Elija cualquiera de los siguientes botones que muestran las medias principales.
    TabsA.mb-5
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Talle delantero:")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img22.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Talle delantero::
            p Se coloca la cinta métrica desde la fosa supraclavicular (ángulo cuello-hombro) hasta la cintura (zona umbilical).  
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Centro frente")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img21.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Centro frente:
            p Se coloca la cinta métrica desde el centro del puño o manubrio external (base del cuello) hasta la cintura centro frente (zona umbilical).  
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Talle atrás:")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img23.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Talle atrás:
            p Se coloca la cinta métrica desde la fosa supraclavicular (ángulo cuello-hombro) hasta el inicio de las vértebras lumbares. 
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Centro atrás:")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img24.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Centro atrás:
            p Se coloca la cinta métrica desde la séptima vértebra cervical, siguiendo la línea media vertebral hasta el promontorio de inicio de las vértebras lumbares (cintura espalda). 
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Altura de busto:")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img25.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Altura de busto:
            p Se coloca la cinta métrica verticalmente desde la fosa supraclavicular (ángulo cuello-hombro) hasta el pezón.
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Largo hombro # 1:")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img26.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Largo hombro # 1:
            p Se coloca la cinta métrica desde la fosa supraclavicular (ángulo cuello-hombro) hasta el punto acromio.
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Altura de tiro:")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img27.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Altura de tiro:
            p Con la persona sentada en una superficie plana se coloca la cinta métrica verticalmente desde la cintura hasta el borde de la superficie, determinando la ubicación de la zona perineal.
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Largo de manga:")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img28.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Largo de manga:
            p Con el brazo doblado y la mano sobre la cadera se coloca la cinta métrica desde el punto acromio pasando por el hueso olio craneano del codo hasta la apófisis estiloides del cúbito.
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Largo falda:")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img29.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Largo falda:
            p Se coloca la cinta métrica desde la línea lateral de cintura (reja costal) por la parte lateral exterior hasta el maléolo exterior o el largo deseado de la prenda. 
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Largo de pantalón o falda # 2:")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img30.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Largo de pantalón o falda # 2:
            p Se coloca la cinta métrica desde la línea lateral de cintura (reja costal) por la parte lateral exterior hasta el maléolo exterior o el largo deseado de la prenda.
    .h5 Medidas horinzontales.
    p.mb-5 Son las medidas asociadas a los anchos, separaciones y contornos, se toman de forma horizontal. Estas permiten realizar modificaciones a los patrones base, haciendo las prendas más estéticas y ajustadas a la figura de los clientes objetivo. 
      br
      br
      |Los anchos se toman en sentido horizontal de un punto a otro.  Ejemplo: ancho pecho, ancho espalda, separación de busto. 
      br
      br
      |Los contornos se toman de manera circular, el punto de llegada es el mismo punto de partida. 
      br
      br
      |Elija cualquiera de los siguientes botones que muestran las medias principales.
    TabsA.mb-5
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Contorno cuello:")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img32.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Contorno cuello:
            p Se coloca la cinta métrica alrededor de cuello partiendo de la séptima cervical, pasando por las fosas supraclaviculares (ángulos cuello-hombro) dejando caer la cinta métrica ligeramente tensionada, para cerrarse sobre el puño o manubrio external.
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Contorno busto:")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img31.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Contorno busto:
            p Se coloca la cinta métrica alrededor del tórax sobre la base de los omoplatos, bajo las axilas en forma horizontal cerrándose el metro por la punta de los pezones. (La línea de contorno de busto pasa exactamente por la 5ª vértebra torácica).
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Contorno de pecho:")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img33.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Contorno de pecho:
            p Se coloca la cinta métrica horizontalmente alrededor del tórax sobre los omoplatos, bajo las axilas, hasta la parte plana arriba del busto. 
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Contorno imperio:")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img34.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Contorno imperio:
            p Se coloca la cinta métrica alrededor del tórax, pasando por la parte baja del nacimiento o base del busto. 
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Contorno de cintura:")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img35.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Contorno de cintura:
            p Se coloca la cinta métrica ligeramente tensionada desde el promontorio de inicio de las vértebras lumbares, pasando por los puntos medios entre la costilla flotante inferior y la cresta ilíaca, cerrándose el metro sobre cintura centro frente (zona umbilical).  
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Contorno de cadera:")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img36.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Contorno de cadera:
            p Se coloca la cinta métrica horizontalmente ligeramente tensionada sobre las crestas iliacas, pasando por la parte más sobresaliente de los glúteos. 
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Contorno de puño:")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img37.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Contorno de puño:
            p Con el puño cerrado se coloca la cinta métrica alrededor de la parte más ancha de la mano.  
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Ancho de pecho #1:")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img38.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Ancho de pecho #1:
            p Se coloca la cinta métrica del pliegue anterior post axilar, pasando por la parte plana del tórax hasta el otro pliegue anterior post axilar.  
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Separación de busto #2:")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img39.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Separación de busto #2:
            p Se coloca la cinta métrica horizontalmente de pezón a pezón.  
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Ancho espalda #4:")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img40.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Ancho espalda #4:
            p Se coloca la cinta métrica desde el pliegue posterior post axilar,pasando por los omoplatos hasta el otro pliegue posterior post axilar.   
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Separación de hombros #3:")
        .row
          .col-5
            figure
              img(src='@/assets/curso/img41.svg', alt='Texto que describa la imagen' style='width: 192px').mx-auto
          .col-7
            .h4 Ancho espalda #4:
            p Se coloca la cinta métrica del acromio izquierdo al acromio derecho con los brazos colgando naturalmente.
    p.mb-5 Para verificar la forma de tomar estas medidas consulte el siguiente video:
    figure
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/vFERGlTF6C8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Toma de medidas  
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>

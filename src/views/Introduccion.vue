<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    
    figure.mb-5
      img(src='@/assets/curso/img1.jpg', alt='Texto que describa la imagen')
    
    p.mb-5 En este material de formación se relacionan los conceptos técnicos asociados al patronaje industrial, los cuales son la base fundamental para el desarrollo del patrón de falda básica; se inicia con el reconocimiento del cuerpo humano femenino, sus puntos anatómicos, que se trasladan a la metodología para la toma de medidas, la interpretación de un cuadro de tallas y la aplicación de estas medidas en el procedimiento de patronaje de falda básica.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>

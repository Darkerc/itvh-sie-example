<template>
  <div>
      <!--
        Pagina de inicio donde se realiza el login del usuario en esta se importan 3 componentes
        Titular: Titulo que muestra el Texto "Intituto tecnologico de villahermosa"
        FormPrincipal: Formulario que realiza la validacion del usuario
        ImgSie: Imagenes del sie e itvh
      -->

      <b-container id="content" class="d-flex flex-column" fluid>

        <Titular class="mt-0 mb-0" />

        <b-row class="index mt-auto mb-auto">

          <b-col sm="12" lg="8" class="d-flex flex-column m-auto p-0" order-lg="5">
            <FormPrincipal class="mt-auto mb-auto"/>
          </b-col>
          <b-col lg="4" class="item d-flex flex-column" order="1">
            <ImgSie class="mt-auto mb-auto" />
          </b-col>

        </b-row>

        <!-- Video background que se muestra -->
        <img id="videoBG" src="/BackFile4.gif">

        <div id="backColor"></div>

      </b-container>


  </div>
</template>

<script>
import Titular from '~/components/Titular.vue'
import FormPrincipal from '~/components/index/FormPrincipal.vue'
import ImgSie from '~/components/index/ImgSie.vue'

export default {
  components: {
    FormPrincipal,
    ImgSie,
    Titular
  },
  head () {
    //Atributos de la cabecera (head) que le pertenecen a esta pagina
    return {
      title: "ITVH - SIE",
      meta:[
        { hid: 'description', name:"description" , content:"Accede a tu cuenta del SIE!!" }
      ]
    }
  }

}
</script>

<style lang="scss">
  #content{
    min-width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    user-select: none;
    overflow: hidden;
    position:relative;
    z-index: 1;

    #videoBG{
      position: absolute;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      z-index: -2;
    }

    #backColor{
      background-color: rgba(200, 255, 208, 0.75) !important;
      z-index: -1;
      min-width: 100vw;
      max-width: 100vw;
      min-height: 100vh;
      max-height: 100vh;
      position: absolute;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
    }
  }

  .bg-none{
    background: none;
  }

  @media (max-width: 768px) {
    .item{
      display: none !important;
      visibility: hidden;
    }
   }
</style>


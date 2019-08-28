<template>
  <div>

      <!-- Video background que se muestra -->
      <video id="videoBG" autoplay muted loop>
        <source src="../assets/Index/BackFile.mp4" type="video/mp4">
      </video>

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
    background-color: rgba(200, 255, 208, 0.75) !important;
    overflow: hidden;
  }

  #videoBG{
    position: fixed;
    top:0;
    left:0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .item{
      display: none !important;
      visibility: hidden;
    }
   }
</style>


<template>
  <div>

      <!--
        Plantilla principal de la aplicacion cuando se h iniciado session en el SIE
        Contine tres componentes principales
        Navbar: Es donde se carga la barra de navegcion cuando se esta por debajo de 992px
        BannerApp: Es el layout que se carga cuando se esta por encima de 992px
        nuxt: Este componentes carga las diferentes pages(paginas) que pueda contener la app
       -->
      <b-row id="content" class="p-0">

        <NavBar id="NavBar"/>

        <b-col lg="3" class="colum colBannerApp p-0">
          <BannerApp id="BannerApp" class="h-100 pr-0" />
        </b-col>

        <b-col sm="12" lg="9" class="p-0 d-flex colum">
          <nuxt id="nuxt" class="scroll-info"/>
        </b-col>

      </b-row>

  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue"
import BannerApp from "~/components/BannerApp.vue"

export default {
  middleware:"userAuth",
  components: {
    NavBar,
    BannerApp
  }
}
</script>

<style lang="scss">

#content{
  min-width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  box-sizing: border-box;
  padding: 0 !important;
  user-select: none;
  background-color: rgb(39, 124, 59) !important;
  overflow: hidden;
  margin:0;

  #NavBar{
    display: none;
    @media (max-width: 992px) {
      display: block;
    }
  }

  .colum{
      min-height: 100vh;
      max-height: 100vh;
      background-color: rgb(39, 124, 59) !important;
  }

  #nuxt{
    box-sizing: border-box;
    height: 95%;
    width: 95%;
    margin: auto !important;
    box-sizing: border-box;
    display: block;
    border-radius: 1%;
    padding: 1.5em;
    overflow: auto;
    user-select: text;
    background-color: white;

    @media (max-width: 992px) {
      padding: 3em 1em 1em 1em;
      border-radius: 0  0 1% 1%;
    }
  }

  .colBannerApp{
    @media (max-width: 992px) {
      display: none;
      max-width: 0;
      max-height: 0;
    }

    #BannerApp{
     @media (max-width: 992px) {
      display: none;
      max-width: 0;
      max-height: 0;
    }
  }

  }
}

</style>


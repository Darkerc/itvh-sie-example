<template>
  <div>
    <header>
      <nav class="navbar navbar-light justify-content-sm-between fixed-top">

        <b-navbar-brand class="navbar-brand order-1 mt-0 mb-0 p-0 text-white titleNav" href="#">
        <img src="~/assets/images/logo-itvh.png" width="30" class="d-inline-block align-top" alt="Instituto tecnologico de villahermosa">
          ITVH - <b-badge variant="success">SIE</b-badge>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" id="toggleButton" class="align-self-start navbar-dark"></b-navbar-toggle>

        <div class="collapse navbar-collapse p-2 d-flex flex-column menuMobile" id="navbarSupportedContent">
          <ul class="navbar-nav align-self-stretch w-100 h-100" id="itemsNavContent">
            <li class="card-user">
              <div>
                <img src="~/assets/17301148.jpg" alt="Alumno-itvh" class="user-thumb">
              </div>
              <nuxt-link :to="{ name: 'welcome'}" class="user-name">
                Eder Reyes Castellanos
              </nuxt-link>
            </li>
            <li class="nav-item hoverEfect">
              <nuxt-link :to="{ name: 'welcome'}" class="nav-link">
                Datos Generales
              </nuxt-link>
            </li>
            <li class="nav-item hoverEfect">
              <nuxt-link :to="{ name: 'Carga-de-documentos'}" class="nav-link">
                Carga de Documentos
              </nuxt-link>
            </li>
            <li class="nav-item hoverEfect">
              <nuxt-link :to="{ name: 'Horario'}" class="nav-link">
                Horario
              </nuxt-link>
            </li>
            <li class="nav-item hoverEfect">
              <nuxt-link :to="{ name: 'Calificaciones'}" class="nav-link">
                Calificaciones
              </nuxt-link>
            </li>
            <li class="nav-item hoverEfect">
              <nuxt-link :to="{ name: 'Kardex'}" class="nav-link">
                Kardex
              </nuxt-link>
            </li>
            <li class="nav-item hoverEfect">
              <nuxt-link :to="{ name: 'Adeudos-a-deptos'}" class="nav-link">
                Adeudos a departamentos
              </nuxt-link>
            </li>
            <li class="nav-item hoverEfect">
              <nuxt-link :to="{ name: 'Reinscripciones'}" class="nav-link">
                Reinscripciones
              </nuxt-link>
            </li>
            <li class="nav-item hoverEfect">
              <nuxt-link :to="{ name: 'Grupos-actuales'}" class="nav-link">
                Grupos actuales
              </nuxt-link>
            </li>
            <li class="nav-item hoverEfect">
              <nuxt-link :to="{ name: 'Grupos-preparacion'}" class="nav-link">
                Grupos en preparacion
              </nuxt-link>
            </li>
            <li class="nav-item hoverEfect">
              <nuxt-link :to="{ name: 'Encuesta-carga'}" class="nav-link">
                Encuesta de carga
              </nuxt-link>
            </li>
            <li class="nav-item hoverEfect">
              <nuxt-link :to="{ name: 'Examenes-especiales'}" class="nav-link">
                Examenes especiales
              </nuxt-link>
            </li>
            <li class="nav-item hoverEfect">
              <nuxt-link :to="{ name: 'Residencia'}" class="nav-link">
                Residencia
              </nuxt-link>
            </li>
            <li class="nav-item hoverEfect">
              <nuxt-link :to="{ name: 'Titulacion'}" class="nav-link">
                Titulacion
              </nuxt-link>
            </li>
            <li class="nav-item hoverEfect">
              <nuxt-link :to="{ name: 'Pago-servicios'}" class="nav-link">
                Pagos de servicios
              </nuxt-link>
            </li>
            <li class="nav-item bg-warning text-center">
              <nuxt-link :to="{ name: 'Cambio-NIP'}" class="nav-link">
                Cambio de NIP
              </nuxt-link>
            </li>
            <li class="nav-item bg-danger text-center">
              <a class="nav-link" href="#">
                CERRAR SESION
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <div class="overlay"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.sideBarToogle();
  },
  methods: {
    sideBarToogle() {
      var fixHeight=function(){
        $("#itemsNavContent").css("max-height",document.documentElement.clientHeight - 150);
      }

      fixHeight();

      $(window).resize(function () {
        fixHeight();
      });

      $(".navbar .navbar-toggler").click( e => {
        e.preventDefault();
        fixHeight();
      });

      $("#toggleButton, .overlay").click(function(e){
        e.preventDefault();
        $("#navbarSupportedContent, .overlay").toggleClass("open");
        $("#toggleButton").toggleClass("toogleSelect");
      });
    }
  }

}

</script>

<style lang="scss">
//libreria que permite añadir fuentes responsive
@import "../node_modules/rfs/scss";

//=======Estilos para el navbar principal=================================

.navbar{
  box-shadow: 2px 2px 5px rgb(100, 100, 100);
  background-color: rgb(39, 124, 59);
  user-select: none;

  #navbarSupportedContent{
    background-color: rgb(39, 124, 59);
    margin-top:3.5rem !important;
    box-sizing: border-box;
    box-shadow: 10px 10px 20px inset rgb(24, 82, 39);


    //=====Estilos del scroll dentro del navbar
    ::-webkit-scrollbar {
          background-color: white;
          width: 5px;
      }

      ::-webkit-scrollbar-thumb {
          border-radius: 10px;
          background: linear-gradient(#1fbd46,#14ad66,#24b430);
          margin-right: 2px;
          margin-left: 2px;
      }

      ::-webkit-scrollbar-track {
          background-color: #93ff9c;
          border: 2px solid #93ff9c;

          &:hover {
              background-color: rgb(140, 248, 132);
          }
      }

    #itemsNavContent{
      padding: 1em;
      min-height: 100%;

      .card-user{
        position: relative;
        margin-bottom: 1em;
        width: 200px;
        height: 300px;

        div{
          border-radius: 10%;
          max-width: 200px;
          max-height: 200px;
          min-width: 200px;
          min-height: 200px;
          overflow: hidden;
          background-color: #fff;
          box-sizing: border-box;
          border: 3px solid #fff;

          .user-thumb{
            width: 100%;
            margin: auto;
            object-fit: cover;
          }

        }

        .user-name{
          text-align: center;
          text-decoration: none;
          color: white;
          display: block;
          @include font-size(1.3rem,true);
          margin: .5em 0;
        }

        &:before{
          content: "";
          position:absolute;
          background-color: white;
          bottom: 0;
          left:0;
          width: 100%;
          height: 1px;
          box-shadow: 2px 2px 5px white;
          border-radius: 2px;
        }

      }

    }
  }

}

.titleNav{
  font-family: "Titillium Web","Source Sans Pro",Arial, Helvetica, sans-serif;
  font-weight: 600;
  @include font-size(1.4rem,true);
}

//-------Dropdown y los items que contienen

  .nav-item,.nav-link{
    font-family: "Barlow Semi Condensed","Source Sans Pro",'Times New Roman', Times, serif;
    color:white !important;
    @include font-size(1.15rem,true);
    padding: .2em .15em !important;
    position: relative;
    margin-bottom: .25em;

    .dropdown-menu{
      background-color: rgb(50, 180, 80);
    }

    .dropdown-divider{
      width: 80%;
      margin:auto;
      box-sizing: border-box;
      padding: .2em;
    }

    .dropdown-item{
      color:white !important;

      &:hover{
        background-color: rgb(49, 155, 74);
      }
    }
  }

  .hoverEfect{
    &:hover{
      background-color: rgb(49, 155, 74);
      &:before{
        width: 100%;
      }
      &:after{
        width: 100%;
      }
    }

    &:before{
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 3%;
      background-color: #fff;
      transition: all ease-in-out 300ms;
    }

    &:after{
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 0%;
      height: 3%;
      background-color: #fff;
      transition: all ease-in-out 300ms;
    }

    //=====Esta query detecta si se esta visualizando en un dispositivo movil
    @media (hover: none) and (pointer: coarse) {
      &:before{
        width: 100%;
      }
      &:after{
        width: 100%;
      }
    }
  }

//========================================================================================

.menuMobile{

  position: fixed;
  top:0;
  bottom: 0;
  left:0;
  margin: auto;
  transform: translateX(-100%);
  transition: all ease-in-out 250ms;

  &.open{
    transform: translateX(0);
  }

  .navbar-nav{
    overflow: auto;
  }

}

.overlay{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
  display: none;
  z-index: 10;

    &.open{
      display: block !important;
    }

}

#toggleButton{
  transition: all ease-in-out 400ms;

  //Permite añadir la transicion cuando exite la clase en toggle y cuando no
  &.toogleSelect{
    transform: rotateZ(90deg);
  }

  &:focus{
    outline: none !important;
  }
}



</style>


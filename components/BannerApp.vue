<template>
  <!-- Este template es el banner que acompaña a las paginas cuando se tiene un ancho mayor a 992px -->
  <header class="content m-0 p-0">
      <nav class="navigation h-100">
        <a class="titleNav" href="#">
          <div class="imgCont">
            <img src="~/assets/images/logo-itvh.png" class="imgLogo" alt="Instituto tecnologico de villahermosa">
          </div>
          ITVH - <b-badge variant="success" class="d-flex align-items-center">SIE</b-badge>
        </a>
        <ul class="navContent h-100 scroll-info degraded">
          <li class="navItem user-profile">
            <div class="user-thumb-content">
              <img src="~/assets/17301148.jpg" alt="Alumno-itvh" class="user-thumb">
            </div>
            <nuxt-link :to="{ name: 'welcome'}" class="navLink">
              Eder Reyes Castellanos
            </nuxt-link>
          </li>
          <li class="navItem">
            <span class="navActive"></span>
            <nuxt-link :to="{ name: 'welcome'}" class="itemLink">
              Datos Generales
            </nuxt-link>
          </li>
          <li class="navItem">
            <span class="navActive"></span>
            <nuxt-link :to="{ name: 'Carga-de-documentos'}" class="itemLink">
              Carga de Documentos
            </nuxt-link>
          </li>
          <li class="navItem">
            <span class="navActive"></span>
            <nuxt-link :to="{ name: 'Horario'}" class="itemLink">
              Horario
            </nuxt-link>
          </li>
          <li class="navItem">
            <span class="navActive"></span>
            <nuxt-link :to="{ name: 'Calificaciones'}" class="itemLink">
              Calificaciones
            </nuxt-link>
          </li>
          <li class="navItem">
            <span class="navActive"></span>
            <nuxt-link :to="{ name: 'Kardex'}" class="itemLink">
              Kardex
            </nuxt-link>
          </li>
          <li class="navItem">
            <span class="navActive"></span>
            <nuxt-link :to="{ name: 'Adeudos-a-deptos'}" class="itemLink">
              Adeudos a departamentos
            </nuxt-link>
          </li>
          <li class="navItem">
            <span class="navActive"></span>
            <nuxt-link :to="{ name: 'Reinscripciones'}" class="itemLink">
              Reinscripciones
            </nuxt-link>
          </li>
          <li class="navItem">
            <span class="navActive"></span>
            <nuxt-link :to="{ name: 'Grupos-actuales'}" class="itemLink">
              Grupos actuales
            </nuxt-link>
          </li>
          <li class="navItem">
            <span class="navActive"></span>
            <nuxt-link :to="{ name: 'Grupos-preparacion'}" class="itemLink">
              Grupos en preparacion
            </nuxt-link>
          </li>
          <li class="navItem">
            <span class="navActive"></span>
            <nuxt-link :to="{ name: 'Encuesta-carga'}" class="itemLink">
              Encuesta de carga
            </nuxt-link>
          </li>
          <li class="navItem">
            <span class="navActive"></span>
            <nuxt-link :to="{ name: 'Examenes-especiales'}" class="itemLink">
              Examenes especiales
            </nuxt-link>
          </li>
          <li class="navItem">
            <span class="navActive"></span>
            <nuxt-link :to="{ name: 'Residencia'}" class="itemLink">
              Residencia
            </nuxt-link>
          </li>
          <li class="navItem">
            <span class="navActive"></span>
            <nuxt-link :to="{ name: 'Titulacion'}" class="itemLink">
              Titulacion
            </nuxt-link>
          </li>
          <li class="navItem">
            <span class="navActive"></span>
            <nuxt-link :to="{ name: 'Pago-servicios'}" class="itemLink">
              Pagos de servicios
            </nuxt-link>
          </li>
          <li class="navItem bg-warning">
            <div></div>
            <nuxt-link :to="{ name: 'Cambio-NIP'}" class="itemLink text-center noEfect">
              Cambio de NIP
            </nuxt-link>
          </li>
          <li class="navItem bg-danger">
            <div></div>
            <a href="" class="itemLink text-center noEfect">
              CERRAR SESION
            </a>
          </li>
        </ul>
      </nav>
  </header>
</template>

<script>
export default {
  mounted(){
    //===Esteme metodo añade el efecto de boton a elementos .itemLink
    //===Con al usar css o scss aparentemente se traban los botones asi que se realizo con codigo
    this.navItemPressed()
  },
  methods: {
    navItemPressed() {
      //Obteniendo todos los elementos que confoman la lista en el Componente BannerApp
      let navItems = document.querySelectorAll(".navItem");

      navItems.forEach((navItem)=>{

        //Añadiendo un accion cuando el mouse realiza un mousedown (Se hunde un clic)
        navItem.addEventListener("mousedown", e => {
          navItem.style.transition = "all ease-in-out 150ms";
          navItem.style.transform = "scale(.975)";

          navItems.forEach((navItem)=>{
            let itemLink = navItem.firstChild;
            itemLink.style.background = "rgb(24, 82, 39)";
          });

          //Obteniendo el elmento que tiene e efecto al haver click llamado navActive
          let itemLink = navItem.firstChild;
          itemLink.style.background = "white";
        });

        //Añadiendo un accion cuando el mouse realiza un mouseup (Se levanta un clic)
        navItem.addEventListener("mouseup", e => {
          navItem.style.transition = "all ease-in-out 150ms";
          navItem.style.transform = "scale(1)";
        });
      });
    }
  }
}
</script>


<style lang="scss" scope>
//libreria que permite añadir fuentes responsive
@import "../node_modules/rfs/scss";

.content{
  background-color: rgb(39, 124, 59);
  height: 100%;

  .navigation{
    min-height: 100vh;
    max-height: 100vh;
    padding-bottom: 4em;

    .titleNav{
      font-family: "Titillium Web","Source Sans Pro",Arial, Helvetica, sans-serif;
      font-weight: 600;
      color:white;
      @include font-size(1.4rem,true);
      display: flex;
      justify-content: center;
      margin: auto;
      text-decoration: none;
      height: 30px;

      .imgCont{
        width: 30px;
        height: 30px;

        .imgLogo{
          width: 100%;
          object-fit: cover;
        }
      }

      .badge{
        height: 100%;
        align-self: center;
      }
    }

  .navContent{
    box-sizing: border-box;
    padding: 1em 1.25em;
    margin: 0;
    overflow-y: auto;
    max-height: 100%;

    .navItem{
      margin: .25em 0;
      list-style: none;
      position:relative;
      cursor:pointer;

      .navActive{
        position:absolute;
        top:0;
        right: 0;
        height: 100%;
        background-color:rgb(24, 82, 39);
        width: 5%;
        transition: all ease-in-out 150ms;

        // Esta query sirve para dar estilos a dispositivos moviles
        @media (hover: none) and (pointer: coarse) {
          background-color: white;
        }

      }

      &:hover{
        .navActive{
          background-color: white;
        }
      }

      .user-thumb-content{
        max-width: 200px;
        max-height: 200px;
        min-width: 200px;
        min-height: 200px;
        margin: auto;
        border-radius: 10%;
        background-color: white;
        box-sizing: border-box;
        overflow: hidden;
        border: 3px solid #fff;

        .user-thumb{
          width: 100%;
          margin:auto;
          object-fit: cover;
        }
      }

      .navLink{
        display: block;
        text-decoration: none;
        text-align: center;
        font-weight: 500;
        color: white;
        padding: .1em;
        margin: .3em 0 0 0;
        transition: all ease-in-out 150ms;

        &:hover{
          color: gold;
        }
      }

      .itemLink{
        display: block;
        text-decoration: none;
        text-align: left;
        font-weight: 500;
        color: white;
        padding: .1em;
        @include font-size(1.4rem,true);
        font-family: "Barlow Semi Condensed","Source Sans Pro",'Times New Roman', Times, serif;

      }

      &.user-profile{
        margin-bottom: 1em;

        &:before{
          content: "";
          position: absolute;
          width: 75%;
          height: 1%;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          background-color: white;
          border-radius: 50%;

        }
      }
    }
  }

  }
}
</style>

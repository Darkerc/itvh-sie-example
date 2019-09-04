<template>
  <div>
    <b-alert show variant="primary" class="title">Titulacion</b-alert>
    <b-alert show variant="primary" class="d-inline-block">
      NO HAY TRAMITE DE TITULACION EN EL SISTEMA
    </b-alert>
  </div>
</template>

<script>
  export default {
    layout:"application",
    transition: "default",
    head(){
      return{
        title:"Titulacion",
        meta:[
          { hid: 'description', name:"description" , content:"Completa tu titulacion" }
        ]
      }
    }
  }
</script>

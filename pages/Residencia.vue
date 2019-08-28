<template>
  <div>
    <b-alert show variant="primary" class="title">Residencia</b-alert>
    <b-alert show variant="primary" class="d-inline-block">
      NO HAY TRAMITE DE RESIDENCIA EN EL SISTEMA
    </b-alert>
  </div>
</template>

<script>
  export default {
    layout:"application",
    head(){
      return{
        title:"Residencia",
        meta:[
          { hid: 'description', name:"description" , content:"Realiza tu residencia!!" }
        ]
      }
    }
  }
</script>

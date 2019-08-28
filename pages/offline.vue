<template>
<!-- Los estilos principales de esta pagina se encuentran en ~/assets/scss/tablesStyle -->
  <div>
    <b-alert show variant="primary" class="title">
      Estas sin conexion
    </b-alert>

  </div>
</template>

<script>
export default {
  layout:"application",
  head () {
    //Atributos de la cabecera (head) que le pertenecen a esta pagina
    return {
      title: "Offline",
      meta:[
        { hid: 'description', name:"description" , content:"Pagina sin conexion" }
      ]
    }
  }
}
</script>

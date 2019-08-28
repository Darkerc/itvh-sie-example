<template>
  <div>
    <b-alert v-if="error.statusCode === 404" class="text-center title" show>
      No se ha encontrado la pagina que ha estado buscado :c
    </b-alert>
    <b-alert v-else-if="error.statusCode === 500" class="text-center title" show>
      Ha ocurrido un error en el servidor intente mas tarde
    </b-alert>

    <nuxt-link :to="{ name:'welcome' }" class="text-center text-decoration-none d-block btn btn-info">
      Regresar a la aplicacion
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'application',
  head() {
    return {
      title: `Error ${this.error.statusCode}`
    }
  }
}
</script>

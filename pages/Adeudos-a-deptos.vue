<template>
  <div>

    <b-alert show variant="primary" class="title">
      Adeudos pendientes
    </b-alert>
    <div class="table-responsive">
      <table class="table table-hover table-horizontal">
        <thead>
          <tr>
            <th>Desde</th>
            <th>Departamento</th>
            <th>Reinscripcion</th>
          </tr>
        </thead>
        <tbody>
          <tr scope="row">
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
export default {
  layout:"application",
  transition: "default",
  head () {
    //Atributos de la cabecera (head) que le pertenecen a esta pagina
    return {
      title: "Adeudos a departamentos",
      meta:[
        { hid: 'description', name:"description" , content:"Lista de adeudos del alumno que tiene que finiquitar para poder realizar la inscripcion" }
      ]
    }
  }
}
</script>

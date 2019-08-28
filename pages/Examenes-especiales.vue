<template>
  <div>

    <b-alert show variant="primary" class="title">Exámenes Especiales del Periodo: (2153) AGODIC2015</b-alert>
    <tablevertical
    :arrayContent="[{name:'No.Control',value:'17301148'},
                    {name:'Nombre',value:'Eder Reyes Castellanos'}]"
    ></tablevertical>
    <div class="table-responsive">
      <table class="table table-hover table-horizontal">
        <thead>
          <tr>
            <th>Clave</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Aplicadores</th>
            <th>Fechas</th>
            <th>Horas</th>
            <th>Aulas</th>
            <th>Calif</th>
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
//Este custom-component despliega los datos atravez de un array que contenga
//Objetos con los atributos name y value
import tablevertical from "../components/table-vertical.vue";

export default {
  layout:"application",
  head () {
    //Atributos de la cabecera (head) que le pertenecen a esta pagina
    return {
      title: "Examenes especiales",
      meta:[
        { hid: 'description', name:"description" , content:"Lista de los examenes especiales para alumnos del ITVH" }
      ]
    }
  },
  components: {
    tablevertical
  }
}
</script>

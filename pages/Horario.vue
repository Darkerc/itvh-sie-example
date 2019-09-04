<template>
    <div>
      <!-- Titulo y tabla de la carga academica -->
      <b-alert show variant="primary" class="title">Carga academica</b-alert>
      <tablevertical
      :arrayContent="[{name:'No.Control',value:'17301148'},
                      {name:'Nombre',value:'Eder Reyes Castellanos'},
                      {name:'Estudia',value:'112 ING.SIST.COMP. ISIC-2010-224'},
                      {name:'Periodo',value:'AGODIC2019-14'}]">
      </tablevertical>

      <!-- Titulo y tabla del horario con posibilidad de mostrar opciones -->
      <b-alert show variant="primary" class="title">
        <div class="option">
          <b-button v-b-modal.horarioModal variant="success" class="optionItem">
            <IcoEye/>
          </b-button>
          <b-button v-b-modal.horarioModal variant="info" class="optionItem">
            <IcoPrint/>
          </b-button>
        </div>

        <div class="caption">
          Horario
        </div>
      </b-alert>
      <b-modal id="horarioModal" title="Horario" size="xl" header-text-variant="light" header-bg-variant="success" ok-only>
        <div class="table-responsive">
          <table class="table table-hover table-horizontal">
            <thead>
              <tr>
                <th>Clave</th>
                <th>Materia</th>
                <th>CR</th>
                <th>Docente</th>
                <th>RE</th>
                <th>AS</th>
              </tr>
            </thead>
            <tbody>
              <tr scope="row">
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>CARGADEL PERIODO ENEJUN2019</td>
                <td>CARGADEL PERIODO ACTUAL</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </b-modal>
      <div class="table-responsive">
        <table class="table table-hover table-horizontal">
          <thead>
            <tr>
              <th>Clave</th>
              <th>Materia</th>
              <th>CR</th>
              <th>Docente</th>
              <th>RE</th>
              <th>AS</th>
            </tr>
          </thead>
          <tbody>
            <tr scope="row">
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-center">
                <b-link href="#">
                  CARGADEL PERIODO ENEJUN2019
                </b-link>
                </td>
              <td colspan="3" class="text-center">
                <b-link href="#">
                  CARGADEL PERIODO ACTUAL
                </b-link>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <!-- Titulo y tabla de la Reinscripcion -->
      <b-alert show variant="primary" class="title">Reinscripcion</b-alert>
      <tablevertical
      :arrayContent="[{name:'Fechal',value:''},
                      {name:'Hora',value:''},
                      {name:'Promedio',value:''}]">
      </tablevertical>
    </div>
</template>

<script>
//Este custom-component despliega los datos atravez de un array que contenga
//Objetos con los atributos name y value
import tablevertical from "../components/table-vertical.vue";
import IcoPrint from "../components/IcoFont/IcoPrint";
import IcoEye from "../components/IcoFont/IcoEye";

export default {
  layout:"application",
  transition: "default",
  head () {
    //Atributos de la cabecera (head) que le pertenecen a esta pagina
    return {
      title: "Horario",
      meta:[
        { hid: 'description', name:"description" , content:"Horario del semestre actual y anteriores" }
      ]
    }
  },
  components: {
    tablevertical,
    IcoPrint,
    IcoEye
  }
}
</script>

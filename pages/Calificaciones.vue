<template>
  <div>

    <b-alert show variant="primary" class="title">Calificaciones del semestre</b-alert>
    <tablevertical
      :arrayContent="[{name:'No.Control',value:'17301148'},
                      {name:'Nombre',value:'Eder Reyes Castellanos'},
                      {name:'Estudia',value:'112 ING.SIST.COMP. ISIC-2010-224'},
                      {name:'Periodo',value:'AGODIC2019-14'}]">
    </tablevertical>

    <b-alert show variant="primary" class="title">
      <div class="option">
        <b-button v-b-modal.horarioModal variant="success" class="optionItem">
          <IcoEye/>
        </b-button>
        <b-button v-b-modal.horarioModal variant="primary" class="optionItem">
          <IcoPrint/>
        </b-button>
      </div>

      <div class="caption">
        Calificaciones
      </div>
    </b-alert>
    <b-modal id="horarioModal" title="Calificaciones" size="xl" header-text-variant="light" header-bg-variant="success" ok-only>
      <div class="table-responsive">
        <table class="table table-hover table-horizontal">
          <thead>
            <tr>
              <th>Clave</th>
              <th>RE</th>
              <th>Materia</th>
              <th>Cal</th>
              <th>TC</th>
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
    </b-modal>
    <div class="table-responsive">
      <table class="table table-hover table-horizontal">
        <thead>
          <tr>
            <th>Clave</th>
            <th>RE</th>
            <th>Materia</th>
            <th>Cal</th>
            <th>TC</th>
          </tr>
        </thead>
        <tbody>
          <tr scope="row">
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-center">
              <b-button v-b-modal.CalAnterior block variant="info">
                CARGADEL PERIODO ENEJUN2019
              </b-button>
              <b-modal id="CalAnterior" title="Calificaciones" size="xl" header-text-variant="light" header-bg-variant="success" body-class="scroll-success" scrollable ok-only>
                <iframe src="http://intertec01.itvillahermosa.edu.mx/fotos/AL/2183/17301148boleta.Pdf" class="p-0 m-0 size w-100 h75 scroll-success">
                </iframe>
              </b-modal>
            </td>
            <td colspan="3" class="text-center">
              <b-button v-b-modal.CalActual block variant="info">
                CARGADEL PERIODO ACTUAL
              </b-button>
              <b-modal id="CalActual" title="Calificaciones" size="xl" header-text-variant="light" header-bg-variant="success" body-class="scroll-success" scrollable ok-only>
                <iframe src="http://intertec01.itvillahermosa.edu.mx/fotos/AL/2191/17301148boleta.Pdf" class="p-0 m-0 size w-100 h75 scroll-success">
                </iframe>
              </b-modal>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <b-alert show variant="success" class="d-inline">Promedio: </b-alert>

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
  head () {
    //Atributos de la cabecera (head) que le pertenecen a esta pagina
    return {
      title: "Calificiones",
      meta:[
        { hid: 'description', name:"description" , content:"Calificaciones del alumno del ITVH" }
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



<template>
  <div>
    <b-alert show variant="primary" class="title">Encuesta de carga</b-alert>
    <tablevertical
    :arrayContent="[{name:'No. control',value:'17301148'},
                    {name:'Alumno', value:'EDER REYES CASTELLANOS'},
                    {name:'Semestre', value:'-2° PORCENTAJE: 43.'}]"
    size="sm">
    </tablevertical>

    <div class="table-responsive">
      <table class="table table-hover table-horizontal">
        <thead>
          <tr>
            <th colspan="5">
            </th>
          </tr>
          <tr>
            <th>Clave</th>
            <th>Materia</th>
            <th>Tipo</th>
            <th>Turno</th>
            <th>Cred</th>
          </tr>
        </thead>
        <tbody>
          <tr scope="row">
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-center">
               <b-button block variant="danger" id="btnEliminarMateria">
                Eliminar
              </b-button>
            </td>
            <td colspan="3" class="text-center">
              <b-button block variant="success" id="btnFinalizarMateria">
                Imprimir
              </b-button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <b-button v-b-modal.btnAlerta class="d-block m-auto" variant="info" block>Info. Encuesta</b-button>

    <b-modal id="btnAlerta" body-class="scroll-success degraded" title="Atencion" size="xl" header-text-variant="light" header-bg-variant="success" ok-only scrollable>
      <b-alert show variant="warning" class="title">
       Con la opción SELECCI0NAR MATERIAS podrá elegir las materias que desea cursar en en el periodo que se indica
      </b-alert>
      <b-list-group>
        <b-list-group-item variant="warning">No se encuentre en situación de baja temporal.</b-list-group-item>
        <b-list-group-item variant="warning">El sistema determinará la cantidad de materias que puede solicitar</b-list-group-item>
        <b-list-group-item variant="warning">Selecciona las materias de su plan de estudios que no ha cursado.</b-list-group-item>
        <b-list-group-item variant="warning">Si el alumno tiene modulo de especialidad capturado en el sistema, seleccionará las materias que correspondan a este módulo </b-list-group-item>
        <b-list-group-item variant="warning">Validad si la materia requiere % de créditos de avance.</b-list-group-item>
        <b-list-group-item variant="warning">Omite la materia sino cumple con algún prerrequisito.</b-list-group-item>
        <b-list-group-item variant="warning">Es probable que considere que las materias que esta cursando y no se tienen aun las calificaciones las considere como acreditadas para que otorgue las opciones siguientes.</b-list-group-item>
        <b-list-group-item variant="warning">Omite las materias que deba de cursar en situación de examen especial</b-list-group-item>
        <b-list-group-item variant="warning">Indica con una <b-badge>"R"</b-badge> las materias que se cursaran en repetición de curso y con un <b-badge>"N"</b-badge> las de situación de curso normal.</b-list-group-item>
        <b-list-group-item variant="info"><b-badge variant="dark">Nota:</b-badge> Por lo anterior los grupos que no aparezcan en la lista es por que no cumplen con algunos de los requisitos anteriores.</b-list-group-item>
        <b-list-group-item variant="info"><b-alert variant="info" show>El botón ELIMINAR, elimina de su solicitud las materias seleccionadas en las casillas del horario elegido.</b-alert></b-list-group-item>
      </b-list-group>
    </b-modal>

  </div>
</template>

<script>
import tablevertical from "../components/table-vertical.vue";

export default {
  layout:"application",
  head(){
    return{
      title:"Encuesta de carga",
      meta:[
        { hid: 'description', name:"description" , content:"Realiza la encuesta para cargar" }
      ]
    }
  },
  components: {
    tablevertical
  },
  mounted(){
    this.$bvModal.show("btnAlerta")
  }
}
</script>

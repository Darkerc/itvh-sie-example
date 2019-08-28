<template>
  <div>

    <b-alert show variant="primary" class="title">Reinscripciones</b-alert>
    <b-alert show variant="success" class="d-flex">
      <p class="m-auto text-center">
        Reinscripciones correspondientes al periodo: (2193) AGODIC2019
      </p>
      <b-button v-b-modal.btnAlerta class="m-auto" variant="info">Info. Reinscripcion</b-button>
    </b-alert>

    <tablevertical
      :arrayContent="[{name:'No.control', value:'17301148'},
                      {name:'Alumno',value:'EDER REYES CASTELLANOS'},
                      {name:'Semestre',value:'05° PORCENTAJE: 43.'},
                      {name:'Fecha de Reinscripciòn',value:''},
                      {name:'Hora de Reinscripción',value:'EDER REYES CASTELLANOS'},
                      {name:'Promedio',value:''},
                      {name:'Especiales',value:'00'},
                      {name:'Repetición	',value:'00'},
                      {name:'Límites de Carga',value:'36 Maxima 20 Mínima'},
                      {name:'Nota',value:''}]"
      size="sm">
    </tablevertical>

    <b-alert show variant="primary" class="title">Carga academica</b-alert>

    <div class="table-responsive">
      <table class="table table-hover table-horizontal">
        <thead>
          <tr>
            <th colspan="5">
              <b-link href="#">Ficha de pago</b-link>
            </th>
            <th colspan="5">
              <b-link href="#">Cargar materias</b-link>
            </th>
          </tr>
          <tr>
            <th>Clave</th>
            <th>Materia</th>
            <th>Tipo</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miercoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
            <th>Sabado</th>
          </tr>
        </thead>
        <tbody>
          <tr scope="row">
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="6" class="text-right">
              Total de creditos
            </td>
            <td colspan="3" class="text-left">
               0
            </td>
          </tr>
          <tr>
            <td colspan="5" class="text-center">
              <b-button block variant="danger" id="btnEliminarCA">
                Eliminar
              </b-button>
              <b-popover
                target="btnEliminarCA"
                title="Atencion!"
                triggers="hover focus"
                placement="right"
                content="Este botón ELIMINA de su CARGA ACADÉMICA las materias seleccionadas"
              ></b-popover>
            </td>
            <td colspan="5" class="text-center">
              <b-button block variant="success" id="btnFinalizarCA">Finilizar reinscripcion</b-button>
              <b-popover
                target="btnFinalizarCA"
                title="Atencion!"
                triggers="hover focus"
                placement="left"
                content="Este botón BLOQUEA y no permite mas modificaciones a su horario"
              ></b-popover>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <b-alert show variant="primary" class="title">Solicitudes de altas o bajas</b-alert>
    <div class="table-responsive">
      <table class="table table-hover table-horizontal">
        <thead>
          <tr>
            <th>Clave</th>
            <th>Materia</th>
            <th>Tipo</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miercoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
            <th>Sabado</th>
          </tr>
        </thead>
        <tbody>
          <tr scope="row">
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="5" class="text-center">
              <b-button block variant="danger" id="btnEliminarSolicitud">Eliminar</b-button>
              <b-popover
                target="btnEliminarSolicitud"
                title="Atencion!"
                triggers="hover focus"
                placement="left"
                content=" Este botón ELIMINA de su CARGA ACADÉMICA las materias seleccionadas"
              ></b-popover>
            </td>
            <td colspan="5" class="text-center">
               <b-button block variant="success">Imprimir</b-button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div class="scroll-success">

    <b-modal id="btnAlerta" body-class="scroll-success degraded" title="Atencion" size="xl" header-text-variant="light" header-bg-variant="success" ok-only scrollable>
      <b-alert show variant="warning" class="title">
        Antes de CARGAR MATERIAS, le sugerimos leer las siguientes indicaciones.
      </b-alert>
      <b-card no-body>
        <b-tabs content-class="mt-3" fill card pills>
          <b-tab title="Cargar materias" title-item-class="bg-primary m-1">
            <b-alert show variant="info" class="text-center">El sistema realizara las siguientes validaciones:</b-alert>
            <b-list-group>
              <b-list-group-item variant="warning">No se encuentre en situación de baja.</b-list-group-item>
              <b-list-group-item variant="warning">No Tengan adeudos con algún departamento.</b-list-group-item>
              <b-list-group-item variant="warning">No exceda de los 12 semestres autorizados.</b-list-group-item>
              <b-list-group-item variant="warning">Que sea su fecha y hora en adelante, es decir podrá acceder a partir de esa fecha y hora en el momento que guste, reacuerde que los espacios en grupos son limitados.</b-list-group-item>
              <b-list-group-item variant="warning">El sistema determinará la carga máxima que se autorice en base a los especiales y materias de repetición de curso.</b-list-group-item>
              <b-list-group-item variant="warning">Selecciona los grupos de su plan de estudios</b-list-group-item>
              <b-list-group-item variant="warning">Si el alumno tiene modulo de especialidad capturado en el sistema seleccionará los grupos que correspondan a este módulo </b-list-group-item>
              <b-list-group-item variant="warning">Los grupos cerrados o que no tienen espacios los omite.</b-list-group-item>
              <b-list-group-item variant="warning">Validad si la materia requiere % de créditos de avance</b-list-group-item>
              <b-list-group-item variant="warning">Omite la materia sino cumple con algún prerrequisito, es decir, hay materias que requiere de la acreditación de otras y el sistema verifica que en su kardex el alumno las tenga acreditadas.</b-list-group-item>
              <b-list-group-item variant="warning">Omite las materias ya acreditadas.</b-list-group-item>
              <b-list-group-item variant="warning">Omite las materias ya seleccionadas</b-list-group-item>
              <b-list-group-item variant="warning">Omite las materias que deba de cursar en situación de examen especial</b-list-group-item>
              <b-list-group-item variant="warning">Indica con una "E" las materias que se cursaran en curso especial, con una "R" las materias que se cursaran en repetición de curso y con un "N" las de situación de curso normal.</b-list-group-item>
              <b-list-group-item variant="warning">Durante la captura hay al menos 100 personas seleccionando materias, por lo tanto podrán cerrase los grupos si toman su decisión antes que usted.</b-list-group-item>
              <b-list-group-item variant="info"><b-badge variant="dark">Nota:</b-badge> Por lo anterior los grupos que no aparezcan en la lista es por que no cumplen con algunos de los requisitos anteriores.</b-list-group-item>
            </b-list-group>
          </b-tab>
          <b-tab title="Eliminar" title-item-class="m-1 bg-primary">
            <b-alert show variant="info" class="text-center">Elimina de su horario las materias seleccionadas en las casillas del horario elegido.</b-alert>
            <b-list-group>
              <b-list-group-item variant="warning">Libera el espacio en el grupo eliminado</b-list-group-item>
            </b-list-group>
          </b-tab>
          <b-tab title="Finalizar inscripcion" title-item-class="m-1 bg-primary">
            <b-alert show variant="info" class="text-center">
              Guarda definitivamente su horario y no permitirá ningún ajuste posterior, por lo que es muy importante que este seguro del horario elegido y no requerir solicitar un alta. Al seleccionar este botón su horario quedara guardado y seguro. En caso de requerir algun ajuste tendrá que solicitar apoyo al personal de división de Estudios Profesionales
            </b-alert>
          </b-tab>
          <b-tab title="Solicitar altas" title-item-class="m-1 bg-primary">
            <b-alert show variant="info" class="text-center">
              En caso de requerir algun ajuste en su carga, puede crear una solicitud y su Coordinador de Carrera atenderá esta posibilidad y aqui mismo podrá darle seguimiento. Verifique primero que esta materia no sea elegible en CARGAR MATERIAS y de solicitarla no olvide captura el motivo. Use las siguientes palabras como inicio de la Descripción: CERRADO, REEMPLAZO, SEMESTRE, PREREQUISITO, PORCENTAJE, CREDITOS. Se analiza cada caso, no todo procede, por lo cual trate de elegir su mejor CARGA DE MATERIAS
            </b-alert>
          </b-tab>
          <b-tab title="Cuota de reinscripcion" title-item-class="m-1 bg-primary">
            <b-alert show variant="info" class="text-center">
              Imprima su Ficha de Depósito, solo en caso de que la institución cuente con el servicio de Depósitos Referenciados
            </b-alert>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-modal>

    </div>

  </div>
</template>

<script>
//Este custom-component despliega los datos atravez de un array que contenga
//Objetos con los atributos name y value
import tablevertical from "../components/table-vertical.vue";

export default {
    layout: "application",
    head() {
        //Atributos de la cabecera (head) que le pertenecen a esta pagina
        return {
            title: "Reinscripciones",
            meta:[
              { hid: 'description', name:"description" , content:"Carga tus materia para el nuevo ciclo escolar!!" }
            ]
        }
    },
    components:{
      tablevertical
    },
    mounted() {
      this.$bvModal.show("btnAlerta")
    }
}
</script>

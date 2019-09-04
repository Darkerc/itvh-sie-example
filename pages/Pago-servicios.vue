<template>
  <div>

    <b-alert show variant="primary" class="title">Pago de servicios</b-alert>
    <tablevertical
    :arrayContent="[{name:'No. control',value:'17301148'},
                    {name:'Alumno' , value:'EDER REYES CASTELLANOS'}]"
    size="sm">
    </tablevertical>

    <b-modal body-class="scroll-success degraded" id="btnServicios" title="Seleccionar disponibles" size="xl" header-text-variant="light" header-bg-variant="success" ok-only scrollable>
      <div class="table-responsive scroll-success degraded">
        <table class="table table-hover table-horizontal sm">
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Descripcion</th>
              <th>Importe</th>
              <th>Vigencia</th>
              <th>Observaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr scope="row">
            </tr>
          </tbody>
        </table>
      </div>
      <b-alert show variant="warning text-center title">Domicilio actual</b-alert>
      <b-alert show variant="info" class="text-center lead">
        NO OMITA ACTUALIZAR SUS DATOS PERSONALES, ESPECIALMENTE EL CORREO ELECTRONICO SERA MUY UTIL PARA BRINDARLE UN MEJOR SERVICIO EN TRAMITES (CALLE, CIUDAD, CORREO Y AL MENOS UN TELEFONO, SON OBLIGATORIOS)
      </b-alert>
      <b-form id="enviarServicio" name="enviarServicio" @submit.prevent="enviarFormulario">
        <div class="table-responsive overflow-hidden">
          <table class="table table-hover table-vertical ">
            <tbody>
              <b-row>
                <b-col sm="12" lg="6">
                  <tr>
                    <td>
                      <label for="txtCalle">Calle</label>
                    </td>
                    <td>
                      <input
                      id="txtCalle"
                      name="txtCalle"
                      placeholder="Calle"
                      v-model="txtCalle">
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="txtColonia">Colonia</label>
                    </td>
                    <td>
                      <b-form-input
                      id="txtColonia"
                      name="txtColonia"
                      placeholder="Colonia"
                      v-model="txtColonia"
                      ></b-form-input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="txtTelefono">Telefono</label>
                    </td>
                    <td>
                      <b-form-input
                      id="txtTelefono"
                      name="txtTelefono"
                      placeholder="Telefono"
                      v-model="txtTelefono"
                      ></b-form-input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="txtCorreoE">Correo E.</label>
                    </td>
                    <td>
                      <b-form-input
                      id="txtCorreoE"
                      name="txtCorreoE"
                      placeholder="Correo Electronico"
                      v-model="txtCorreoE"
                      ></b-form-input>
                    </td>
                  </tr>
                </b-col>
                <b-col sm="12" lg="6">
                  <tr>
                    <td>
                      <label for="txtNumero">Numero</label>
                    </td>
                    <td>
                      <b-form-input
                      id="txtNumero"
                      name="txtNumero"
                      placeholder="Numero"
                      v-model="txtNumero"
                      ></b-form-input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="txtCiudad">Ciudad</label>
                    </td>
                    <td>
                      <b-form-input
                      id="txtCiudad"
                      name="txtCiudad"
                      placeholder="Ciudad"
                      v-model="txtCiudad"
                      ></b-form-input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="txtCelular">Celular</label>
                    </td>
                    <td>
                      <b-form-input
                      id="txtCelular"
                      name="txtCelular"
                      placeholder="Celular"
                      v-model="txtCelular"
                      ></b-form-input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="txtRFC">RFC</label>
                    </td>
                    <td>
                      <b-form-input
                      id="txtRFC"
                      name="txtRFC"
                      placeholder="RFC"
                      v-model="txtRFC"
                      ></b-form-input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="txtCP">C.P</label>
                    </td>
                    <td>
                      <b-form-input
                      id="txtCP"
                      name="txtCP"
                      placeholder="C.P"
                      v-model="txtCP"
                      ></b-form-input>
                    </td>
                  </tr>
                </b-col>
              </b-row>
            </tbody>
          </table>
        </div>
        <b-button variant="primary" type="submit" block>Agregar</b-button>
      </b-form>
    </b-modal>

    <div class="table-responsive scroll-success">
      <table class="table table-hover table-horizontal sm">
        <thead>
          <tr>
            <th colspan="12">
              <b-button v-b-modal.btnServicios squared variant="outline-success">
                Seleccionar servicios
              </b-button>
            </th>
          </tr>
          <tr>
            <th>Folio</th>
            <th>Codigo</th>
            <th>Descripcion</th>
            <th>Importe</th>
            <th>Vigencia</th>
            <th>Solicitado</th>
            <th>Validado</th>
            <th>Tramite</th>
            <th>Listo</th>
            <th>Entregado</th>
            <th>Sucursal</th>
            <th>Autoriz</th>
          </tr>
        </thead>
        <tbody>
          <tr scope="row">
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="6" class="text-center">
              <b-button block variant="danger" id="btnEliminar">Eliminar</b-button>
            </td>
            <td colspan="6" class="text-center">
              <b-button block variant="success" id="btnImprimir">Imprimir</b-button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <b-button v-b-modal.btnAlerta class="d-block mt-2" variant="info" block>Instrucciones</b-button>

    <b-modal id="btnAlerta" title="Atencion" size="xl" header-text-variant="light" header-bg-variant="success" ok-only scrollable>
      <b-alert show variant="warning" class="title">
        Intrucciones
      </b-alert>
      <b-card no-body>
        <b-tabs content-class="mt-3" fill card pills>
          <b-tab title="Seleccionar servicio" title-item-class="m-1 bg-primary">
            <b-alert show variant="info" class="text-center">Seleccione los servicios de una lista:</b-alert>
            <b-list-group>
              <b-list-group-item variant="warning"><b-badge>Nota : </b-badge> No omita actualizar sus datos personales, para el envío de la factura electrónica a su correo.</b-list-group-item>
            </b-list-group>
          </b-tab>
          <b-tab title="Eliminar" title-item-class="m-1 bg-primary">
            <b-alert show variant="info" class="text-center">
              Elimina de sus solicitudes los servicios seleccionados en las casillas, siempre y cuando este servicio no haya sido ya validado.
            </b-alert>
          </b-tab>
          <b-tab title="Imprimir" title-item-class="m-1 bg-primary">
            <b-alert show variant="info" class="text-center">
              Imprima su Ficha de Depósito, solo en caso de que la institución cuente con el servicio de Depósitos Referenciados.
            </b-alert>
            <b-alert show variant="info" class="text-center">
              Solo puede seleccionar un servicio por cada impresión
            </b-alert>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-modal>

  </div>
</template>

<script>
import tablevertical from "../components/table-vertical.vue";

  export default {
    layout:"application",
    transition: "default",
    head(){
      return{
        title:"Pago de servicios",
        meta:[
          { hid: 'description', name:"description" , content:"Pago de servicios para alumnos ITVH" }
        ]
      }
    },
    components:{
      tablevertical
    },
    data(){
      return{
        txtCalle:"",
        txtColonia:"",
        txtTelefono:"",
        txtCorreoE:"",
        txtNumero:"",
        txtCiudad:"",
        txtCelular:"",
        txtRFC:"",
        txtCP:""
      }
    },
    mounted() {
      this.$bvModal.show("btnAlerta");
      this.validarCampos();
    },
    methods: {
      validarCampos(){
        $("#enviarServicio").validate({
          rules:{
            txtCalle:{ required:true }
            // ,
            // txtColonia:{required:true},
            // txtTelefono:{required:true},
            // txtCorreoE:{required:true},
            // txtNumero:{required:true},
            // txtCiudad:{required:true},
            // txtCelular:{required:true},
            // txtRFC:{required:true},
            // txtCP:{required:true}
          }
        })
      },
      enviarFormulario(){
        if($("#enviarServicio").valid()){
          console.log(this.$data)
        }
      }
    }
  }
</script>

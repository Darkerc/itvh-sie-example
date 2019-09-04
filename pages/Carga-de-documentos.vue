<template>
<!-- Los estilos principales de esta pagina se encuentran en ~/assets/scss/tablesStyle -->
  <div>
   <b-alert show variant="primary" class="title">Datos generales del alumno</b-alert>
   <div class="table-responsive">
     <table class="table table-hover table-vertical">
        <tbody>
          <tr>
            <td>Clave CURP</td>
            <td>
              {{ alumno.CURP }}
            </td>
          </tr>
          <tr>
            <td>Nombre</td>
            <td>
              {{ alumno.Nombre }}
            </td>
          </tr>
          <tr>
            <td>Carrera</td>
            <td>
              {{ alumno.Carrera }}
            </td>
          </tr>
          <tr>
            <td>Foto</td>
            <td>
              <div class="imgCont">
                <img :src="alumno.Foto" >
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <label for="certificado">Subir certificado</label>
            </td>
            <td>
              <b-form
                id="enviarCertificado"
                name="enviarCertificado"
                @submit.prevent="enviarPDF(certificado,'enviarCertificado')">
                <!-- Envia el formulario el primer parametro es el atributo data al que esta bindeado
                    el segundo parametro es el id del formulario que realiza el envio -->
                <div class="contFile">
                  <div id="nameCer">
                    Seleccione su archivo en formato PDF
                  </div>
                  <input
                    type="file"
                    name="certificado"
                    id="certificado"
                    class="d-block"
                    @change="(e) => this.obtenerArchivo(e,certificado,'nameCer','enviarCertificado')">
                    <!-- Muestra el nombre del archivo y almacena el valor del input-file en el
                        atributo data al que esta bindeado -->
                </div>
                <label for="certificado" class="messageTag" id="messageCer">
                </label>
                <b-button type="submit" variant="success" class="d-inline-block mt-4">Enviar Certificado</b-button>
                <b-button type="reset" variant="warning" class="mt-4 d-inline-block">Resetear</b-button>
              </b-form>
            </td>
          </tr>
          <tr>
            <td>Subir<br>
              <label for="actaNacimiento">Acta de nacimiento</label>
            </td>
            <td>
              <b-form
                id="enviarActaN"
                name="enviarActaN"
                @submit.prevent="enviarPDF(actaNacimiento,'enviarActaN')">
                <!-- Envia el formulario el primer parametro es el atributo data al que esta bindeado
                    el segundo parametro es el id del formulario que realiza el envio -->
                <div class="contFile">
                  <div id="nameAct">
                    Seleccione su archivo en formato PDF
                  </div>
                  <input
                    type="file"
                    name="actaNacimiento"
                    id="actaNacimiento"
                    class="d-block"
                    @change="(e) => this.obtenerArchivo(e,actaNacimiento,'nameAct','enviarActaN')">
                    <!-- Muestra el nombre del archivo y almacena el valor del input-file en el
                        atributo data al que esta bindeado -->
                </div>
                <label for="actaNacimiento" class="messageTag" id="messageAct">
                </label>
                <b-button type="submit" variant="success" class="d-inline-block mt-4">Enviar Certificado</b-button>
                <b-button type="reset" variant="warning" class="mt-4 d-inline-block">Resetear</b-button>
              </b-form>
            </td>
          </tr>
          <tr>
            <td><label for="CURP">Subir CURP</label></td>
            <td>
              <b-form
                id="enviarCURP"
                name="enviarCURP"
                @submit.prevent="enviarPDF(CURP,'enviarCURP')">
                <!-- Envia el formulario el primer parametro es el atributo data al que esta bindeado
                    el segundo parametro es el id del formulario que realiza el envio -->
                <div class="contFile">
                  <div id="nameCURP">
                    Seleccione su archivo en formato PDF
                  </div>
                  <input
                    type="file"
                    name="CURP"
                    id="CURP"
                    ref="CURP"
                    class="d-block"
                    @change="(e) => this.obtenerArchivo(e,CURP,'nameCURP','enviarCURP')">
                    <!-- Muestra el nombre del archivo y almacena el valor del input-file en el
                        atributo data al que esta bindeado -->
                </div>
                <label for="CURP" class="messageTag" id="messageCURP">
                </label>
                <b-button type="submit" variant="success" class="d-inline-block mt-4">Enviar Certificado</b-button>
                <b-button type="reset" variant="warning" class="mt-4 d-inline-block">Resetear</b-button>
              </b-form>
            </td>
          </tr>
        </tbody>
      </table>
   </div>
   <div>
     {{ alumno }}
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
      title: "Carga de documentos",
      meta:[
        { hid: 'description', name:"description" , content:"Envia tus documentos para registralos en el SIE" }
      ]
    }
  },
  mounted() {
    this.validarForm()
  },
  data() {
      return {
        certificado: null,
        actaNacimiento:null,
        CURP:null
      }
    },
  methods: {
    validarForm(){
      //===============Validando el certificado===================================
      $("#enviarCertificado").validate({
        rules:{
          certificado:{ required:true , extension: "pdf" },
        },
        messages:{
          certificado:{ required:"Debe primero seleccionar su certificado",
                        extension:"La extencion debe ser en formato PDF" }
        },
        errorClass:"is-invalid text-danger",
        validClass: "is-valid",
        errorLabelContainer:"#messageCer"
      })
      //===============Validando el Acta===================================
      $("#enviarActaN").validate({
        rules:{
          actaNacimiento:{ required:true , extension: "pdf" },
        },
        messages:{
          actaNacimiento:{ required:"Debe primero seleccionar su Acta",
                           extension:"La extencion debe ser en formato PDF"}
        },
        errorClass:"is-invalid text-danger",
        validClass: "is-valid",
        errorLabelContainer:"#messageAct"
      })
      //===============Validando el Acta===================================
      $("#enviarCURP").validate({
        rules:{
          CURP:{ required:true , extension: "pdf" },
        },
        messages:{
          CURP:{ required:"Debe primero seleccionar su CURP",
                extension:"La extencion debe ser en formato PDF" }
        },
        errorClass:"is-invalid text-danger",
        validClass: "is-valid",
        errorLabelContainer:"#messageCURP"
      })
    },
    obtenerArchivo(e,model,idTextElement,formId){
      //=== Envia el nombre del archivo y almacena el valor del input file el atributo data
      //=== al que esta bindeado
      let file=e.target.files[0];
      let nombreArchivo=e.target.files[0].name;
      this.model=file;
      $(`#${idTextElement}`).text("");
      $(`#${idTextElement}`).text(nombreArchivo);
    },
    enviarPDF(model,formId){
      //=== Si el formulario es valido entonces se realiza el envio del formulario
      if($(`#${formId}`).valid()){
        console.log(this.model)
      }
    }
  },
  async asyncData({ $axios , error}) {
    const alumno = await $axios.$post('/api/alum/data/17301148').catch((err)=>{
      error({ statusCode: 500, message: 'Error al conectar con el servidor en Carga de documentos' })
    })
    return { alumno }
  }
}
</script>

<template>
  <div>
    <div>
      <b-form id="iniciarSesion" name="iniciarSesion" @submit.prevent="validarUsuario" class="p-4">
        <div class="d-block lead text-center formItem">Introduzca sus datos de acceso</div>
        <b-form-group
          id="numControl"
          label="Introduzca su numero de control"
          label-for="NumeroControl"
          class="formItem inputSelected"
        >
          <b-form-input
            id="NumeroControl"
            name="NumeroControl"
            placeholder="No. de control"
            v-model="numControl"
            trim
          >
          </b-form-input>
        </b-form-group>
        <b-form-group
          id="contraseña"
          label="Clave de acceso"
          label-for="Contraseña"
          class="formItem inputSelected"
        >
          <b-form-input
            id="Contraseña"
            name="Contraseña"
            placeholder="Clave"
            type="password"
            v-model="contraseña"
            trim
          >
          </b-form-input>
        </b-form-group>

        <b-row>
          <b-col sm="12" md="8" xl="6" class="pb-2">
            <b-button type="submit" variant="success" size="sm" block>Aceptar</b-button>
          </b-col>
          <b-col sm="12" md="4" xl="6">
            <b-button type="reset" variant="warning" size="sm" block>Limpiar</b-button>
          </b-col>
        </b-row>

      </b-form>
    </div>
  </div>
</template>

<script>

export default {
  name:"FormPrincipal",
  data() {
    return {
      numControl:"",
      contraseña:""
    }
  },
  methods: {
    validarCampos(){

      $("#iniciarSesion").validate({
        rules: {
            NumeroControl: { required: true, maxlength: 15 , number: true},
            Contraseña: { required: true, maxlength: 15 , number: true}
        }, messages: {
            NumeroControl: { required: "El campo es requerido",
                            maxlength: "Longitud demaciado grande",
                            number: "Se requiere un numero de registro" },
            Contraseña: { required: "El campo es requerido",
                            maxlength: "Longitud demaciado grande",
                            number: "La contraseña debe ser numerica" },
        },
        errorElement:"div",
        errorClass:"is-invalid text-danger",
        validClass: "campoValido"
      })

    },
    validarUsuario(){
      if($("#iniciarSesion").valid()){
        this.$router.push({
          name:"Datos-generales"
        })
      }
    }
  },
  mounted() {
    this.validarCampos()
  }
}
</script>

<style lang="scss" scoped>

  @import "../../node_modules/rfs/scss";

  #iniciarSesion{
    background-color: rgba(#87ff83, .65);
    box-sizing: border-box;
    border-radius:20px;
    overflow: hidden;
  }

  .formItem{
    @include font-size(1.75rem,true);
    font-family: "Titillium web",sans-serif;
    font-weight: 800;
    color:white;
    text-shadow: -2px -2px 3px rgb(125, 125, 0),
                  2px -2px 3px rgb(125, 125, 10),
                  -2px 2px 3px rgb(125, 125, 10),
                  2px 2px 3px rgb(125, 125, 10);
  }

  .inputSelected{
    @include font-size(1.5rem,true);
    font-family: Inconsolata,"sans-serif";
    color:white;
    font-weight: 800;
    text-shadow: -2px -2px 3px rgb(125, 125, 0),
                  2px -2px 3px rgb(125, 125, 10),
                  -2px 2px 3px rgb(125, 125, 10),
                  2px 2px 3px rgb(125, 125, 10);
  }
</style>


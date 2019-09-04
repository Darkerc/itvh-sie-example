<template>
  <div>
    <b-alert show variant="primary" class="title">Cambio de NIP</b-alert>
    <b-alert show variant="primary" class="text-center">
      Sistema de integracion escolar
    </b-alert>

    <div class="table-responsive overflow-hidden">
      <table class="table table-hover table-vertical ">
        <tbody>
          <tr>
            <td>
              <label for="txtNIP">Nueva clave de acceso</label>
            </td>
            <td>
              <b-form-input
              id="txtNIP"
              name="txtNIP"
              placeholder="Nuevo NIP"
              ></b-form-input>
            </td>
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
    head(){
      return{
        title:"Cambio de nip",
        meta:[
          { hid: 'description', name:"description" , content:"Cambia tu NIP por uno personalizado" }
        ]
      }
    }
  }
</script>

<template>
<!-- Los estilos principales de esta pagina se encuentran en ~/assets/scss/tablesStyle -->
  <div>

    <b-alert show variant="primary" class="title">
      <div class="option">
        <b-button variant="info" class="optionItem">
          <IcoPrint/>
        </b-button>
      </div>

      <div class="caption">
        Datos generales del alumno
      </div>
    </b-alert>
    <tablevertical
    :arrayContent="[{name:'Nombre del alumno', value: alumno.Nombre },
                    {name:'Carrera',value: alumno.Carrera},
                    {name:'Plan de Estudios',value: alumno.Plan_Estudios},
                    {name:'Módulo de Especialidad',value: alumno.Módulo_Especialidad},
                    {name:'Creditos acumulados',value: alumno.Creditos_acumulados},
                    {name:'Situacion de vigencia',value: alumno.Situacion_vigencia},
                    {name:'Periodo de ingreso',value: alumno.Periodo_ingreso},
                    {name:'Número de Periodos Convalidado',value: alumno.Número_Periodos_Convalidado},
                    {name:'Periodo Actual o Ultimo',value: alumno.Periodo_Actual},
                    {name:'Clave CURP',value: alumno.Clave_CURP},
                    {name:'Fecha de Nacimiento',value: alumno.Fecha_Nacimiento},
                    {name:'Calle',value: alumno.Calle},
                    {name:'Num',value: alumno.Num_DPTO},
                    {name:'Colonia',value: alumno.Colonia},
                    {name:'Ciudad',value: alumno.Ciudad},
                    {name:'C.P',value: alumno.CP},
                    {name:'Teléfono Domicilio',value: alumno.Teléfono_Domicilio},
                    {name:'Teléfono Celular',value: alumno.Teléfono_Celular},
                    {name:'Correo Electrónico',value: alumno.Correo_Electrónico},
                    {name:'Escuela de Procedencia',value: alumno.Escuela_Procedencia},
                    {name:'Tutor',value: alumno.Tutor}]">
    </tablevertical>
  </div>
</template>

<script>
//Este custom-component despliega los datos atravez de un array que contenga
//Objetos con los atributos name y value
import tablevertical from "../components/table-vertical.vue";
import IcoPrint from "../components/IcoFont/IcoPrint";

export default {
  layout:"application",
  transition: "default",
  head () {
    //Atributos de la cabecera (head) que le pertenecen a esta pagina
    return {
      title: "Bienvenido",
      meta:[
        { hid: 'description', name:"description" , content:"Bienvenido al SIE ITVH!!" }
      ]
    }
  },
  components: {
    tablevertical,
    IcoPrint
  },
  async asyncData({ $axios , error}) {
    const alumno = await $axios.$get('/api/alum/17301148').catch((err)=>{
      error({ statusCode: 500, message: 'Error al conectar con el servidor aqui en datos generales' })
    })
    return { alumno }
  }
}
</script>


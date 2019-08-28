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
    :arrayContent="[{name:'Nombre del alumno',value:'EDER REYES CASTELLANOS'},
                    {name:'Carrera',value:'	(11) ING.SIST.COMP.'},
                    {name:'Plan de Estudios',value:'(2) ISIC-2010-224 DE 260 CREDITOS'},
                    {name:'Módulo de Especialidad',value:'()'},
                    {name:'Creditos acumulados',value:'112.0'},
                    {name:'Situacion de vigencia',value:'Vigente'},
                    {name:'Periodo de ingreso',value:'(2173) AGODIC2017'},
                    {name:'Número de Periodos Convalidado',value:'00'},
                    {name:'Periodo Actual o Ultimo',value:'04'},
                    {name:'Clave CURP',value:'RECE990301HTCYSD03'},
                    {name:'Fecha de Nacimiento',value:'1999-03-01'},
                    {name:'Calle',value:'GARDENIAS EDIF C1'},
                    {name:'Num',value:'DPTO 203'},
                    {name:'Colonia',value:'INDECO'},
                    {name:'Ciudad',value:'VILLAHERMOSA'},
                    {name:'C.P',value:'86017'},
                    {name:'Teléfono Domicilio',value:'9933639466'},
                    {name:'Teléfono Celular',value:'9932810619'},
                    {name:'Correo Electrónico',value:'Correo Electrónic'},
                    {name:'Escuela de Procedencia',value:'(0047) C.E.T.I.S. Nº 70, (27004) CENTRO'},
                    {name:'Tutor',value:'LIC. JANET CABRERA MORALES'}]">
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
  }
}
</script>


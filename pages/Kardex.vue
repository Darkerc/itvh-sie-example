<template>
<div>
    <b-alert show variant="primary" class="title">
      <div class="option">
        <b-button variant="info" class="optionItem">
          <IcoPrint/>
        </b-button>
      </div>

      <div class="caption">
        Kardex de calificaciones
      </div>
    </b-alert>
    <tablevertical :arrayContent="[{name:'No.Control',value:'17301148'},
                      {name:'Nombre',value:'Eder Reyes Castellanos'}]">
    </tablevertical>

    <div class="table-responsive">
      <table class="table table-hover table-horizontal">
        <thead>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>1a</th>
                <th></th>
                <th>2da</th>
                <th></th>
                <th>Especial</th>
            </tr>
            <tr>
                <th>Clave</th>
                <th>Materia</th>
                <th>Cal</th>
                <th>Op</th>
                <th>Sem</th>
                <th>Per</th>
                <th>Sem</th>
                <th>Per</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>ACA0907</td>
                <td>TALLER DE ETICA</td>
                <td>96.00</td>
                <td>01</td>
                <td>01</td>
                <td>AGODIC2017</td>
                <td> </td>
                <td> </td>
                <td> - - </td>
            </tr>
            <tr>
                <td>ACD0908</td>
                <td>DES. SUSTENTABLE </td>
                <td>88.00</td>
                <td>01</td>
                <td>03</td>
                <td>AGODIC2018</td>
                <td> </td>
                <td> </td>
                <td> - - </td>
            </tr>
            <tr>
                <td>ACF0901</td>
                <td>CALC. DIFERENCIAL </td>
                <td>100.0</td>
                <td>01</td>
                <td>01</td>
                <td>AGODIC2017</td>
                <td> </td>
                <td> </td>
                <td> - - </td>
            </tr>
            <tr>
                <td>ACC0906</td>
                <td>FUND. DE INVEST. </td>
                <td>100.0</td>
                <td>01</td>
                <td>01</td>
                <td>AGODIC2017</td>
                <td> </td>
                <td> </td>
                <td> - - </td>
            </tr>
            <tr>
                <td>ACF0902</td>
                <td>CALC. INTEGRAL </td>
                <td>95.00</td>
                <td>01</td>
                <td>02</td>
                <td>ENEJUN18 </td>
                <td> </td>
                <td> </td>
                <td> - - </td>
            </tr>
            <tr>
                <td>ACF0903</td>
                <td>ALGEB. LINEAL </td>
                <td>86.00</td>
                <td>01</td>
                <td>02</td>
                <td>ENEJUN18 </td>
                <td> </td>
                <td> </td>
                <td> - - </td>
            </tr>
            <tr>
                <td>ACF0904</td>
                <td>CALC. VECT. </td>
                <td>87.00</td>
                <td>01</td>
                <td>03</td>
                <td>AGODIC2018</td>
                <td> </td>
                <td> </td>
                <td> - - </td>
            </tr>
            <tr>
                <td>ACF0905</td>
                <td>EC. DIFERENCIALES </td>
                <td>86.00</td>
                <td>01</td>
                <td>04</td>
                <td>ENEJUN2019</td>
                <td> </td>
                <td> </td>
                <td> - - </td>
            </tr>
            <tr>
                <td>ACF0903</td>
                <td>ALGEB. LINEAL </td>
                <td>86.00</td>
                <td>01</td>
                <td>02</td>
                <td>ENEJUN18 </td>
                <td> </td>
                <td> </td>
                <td> - - </td>
            </tr>
            <tr>
                <td>ACF0904</td>
                <td>CALC. VECT. </td>
                <td>87.00</td>
                <td>01</td>
                <td>03</td>
                <td>AGODIC2018</td>
                <td> </td>
                <td> </td>
                <td> - - </td>
            </tr>
            <tr>
                <td>ACF0905</td>
                <td>EC. DIFERENCIALES </td>
                <td>86.00</td>
                <td>01</td>
                <td>04</td>
                <td>ENEJUN2019</td>
                <td> </td>
                <td> </td>
                <td> - - </td>
            </tr>
            <tr>
                <td>AEC1008</td>
                <td>CONT. FINANCIERA </td>
                <td>74.00</td>
                <td>01</td>
                <td>02</td>
                <td>ENEJUN18 </td>
                <td> </td>
                <td> </td>
                <td> - - </td>
            </tr>
            <tr>
                <td>AEC1058</td>
                <td>QUIMICA </td>
                <td>96.00</td>
                <td>01</td>
                <td>02</td>
                <td>ENEJUN18 </td>
                <td> </td>
                <td> </td>
                <td> - - </td>
            </tr>
            <tr>
                <td>AED1026</td>
                <td>ESTRUCTURA DE DATOS </td>
                <td>100.0</td>
                <td>01</td>
                <td>03</td>
                <td>AGODIC2018</td>
                <td> </td>
                <td> </td>
                <td> - - </td>
            </tr>
            <tr>
                <td>AEF1031</td>
                <td>FUND. DE BD </td>
                <td>98.00</td>
                <td>01</td>
                <td>04</td>
                <td>ENEJUN2019</td>
                <td> </td>
                <td> </td>
                <td> - - </td>
            </tr>
            <tr>
                <td>AEF1041</td>
                <td>MAT. DISCRETAS </td>
                <td>100.0</td>
                <td>01</td>
                <td>01</td>
                <td>AGODIC2017</td>
                <td> </td>
                <td> </td>
                <td> - - </td>
            </tr>
            <tr>
                <td>AEF1052</td>
                <td>PROB. Y EST. </td>
                <td>79.00</td>
                <td>01</td>
                <td>02</td>
                <td>ENEJUN18 </td>
                <td> </td>
                <td> </td>
                <td> - - </td>
            </tr>
            <tr>
                <td>SCC1005</td>
                <td>CULTURA EMPRESARIAL </td>
                <td>94.00</td>
                <td>01</td>
                <td>03</td>
                <td>AGODIC2018</td>
                <td> </td>
                <td> </td>
                <td> - - </td>
            </tr>
            <tr>
                <td>SCC1013</td>
                <td>INV. OPERACIONES </td>
                <td>88.00</td>
                <td>01</td>
                <td>03</td>
                <td>AGODIC2018</td>
                <td> </td>
                <td> </td>
                <td> - - </td>
            </tr>
            <tr>
                <td>SCD1008</td>
                <td>FUND. DE PROG. </td>
                <td>94.00</td>
                <td>01</td>
                <td>01</td>
                <td>AGODIC2017</td>
                <td> </td>
                <td> </td>
                <td> - - </td>
            </tr>
            <tr>
                <td>SCD1018</td>
                <td>PRINC. ELEC. Y AP. D</td>
                <td>82.00</td>
                <td>01</td>
                <td>04</td>
                <td>ENEJUN2019</td>
                <td> </td>
                <td> </td>
                <td> - - </td>
            </tr>
            <tr>
                <td>SCD1020</td>
                <td>PROG. OR. A OBJ. </td>
                <td>92.00</td>
                <td>01</td>
                <td>02</td>
                <td>ENEJUN18 </td>
                <td> </td>
                <td> </td>
                <td> - - </td>
            </tr>
            <tr>
                <td>SCD1022</td>
                <td>SIMULACION </td>
                <td>100.0</td>
                <td>01</td>
                <td>04</td>
                <td>ENEJUN2019</td>
                <td> </td>
                <td> </td>
                <td> - - </td>
            </tr>
            <tr>
                <td>SCD1027</td>
                <td>TOPICOS AV. PROGR. </td>
                <td>98.00</td>
                <td>01</td>
                <td>04</td>
                <td>ENEJUN2019</td>
                <td> </td>
                <td> </td>
                <td> - - </td>
            </tr>
            <tr>
                <td>SCF1006</td>
                <td>FISICA GRAL. </td>
                <td>90.00</td>
                <td>01</td>
                <td>03</td>
                <td>AGODIC2018</td>
                <td> </td>
                <td> </td>
                <td> - - </td>
            </tr>
            <tr>
                <td>SCH1024</td>
                <td>TALLER DE ADMON. </td>
                <td>83.00</td>
                <td>01</td>
                <td>01</td>
                <td>AGODIC2017</td>
                <td> </td>
                <td> </td>
                <td> - - </td>
            </tr>
            <tr>
                <td></td>
                <td>Promedio</td>
                <td> 91.83 </td>
            </tr>
        </tbody>
      </table>
    </div>

    <b-alert show variant="success" class="d-inline-block">Creditos acumulado: 112 de 260</b-alert>
    <b-alert show variant="success" class="d-inline-block">Porcentaje de avance: 43.08</b-alert>

</div>
</template>

<script>
//Este custom-component despliega los datos atravez de un array que contenga
//Objetos con los atributos name y value
import tablevertical from "../components/table-vertical.vue";
import IcoPrint from "../components/IcoFont/IcoPrint";


export default {
    layout: "application",
    transition: "default",
    head() {
        //Atributos de la cabecera (head) que le pertenecen a esta pagina
        return {
            title: "Kardex",
            meta:[
              { hid: 'description', name:"description" , content:"Avance y lista de materia acreditadas por alumnos del ITVH" }
            ]
        }
    },
    components: {
        tablevertical,
        IcoPrint
    }
}
</script>

<template>
  <div>
    <b-alert show variant="primary" class="title">
      Grupos en preparacion
    </b-alert>
    <div class="table-responsive">
      <table class="table table-hover table-horizontal sm">
        <thead>
          <tr>
            <th>Grupo</th>
            <th>Materia</th>
            <th>Cre</th>
            <th>Sem</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miercoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
            <th>Sabado</th>
            <th>Catedratico</th>
            <th>Plan</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>AEC1034A</td><td>FUND. TELECOM.</td><td>c04</td><td>05A1</td><td>07000800/C_40</td><td>07000800/C_40</td><td>07000800/C_40</td><td>07000800/C_40</td><td>        /    </td><td>        /    </td><td>ING. MIGUEL ANGEL MARTINE</td><td></td></tr>
          <tr><td>SCC1010A</td><td>GRAFICACION</td><td>c04</td><td>05A2</td><td>08000900/C_40</td><td>08000900/C_40</td><td>08000900/C_40</td><td>08000900/C_40</td><td>        /    </td><td>        /    </td><td>MIS JESUS JUNIOR CANALES</td><td></td></tr>
          <tr><td>SCA1025A</td><td>TALLER BASES DATOS</td><td>c04</td><td>05A3</td><td>09001000/C_39</td><td>09001000/C_39</td><td>09001000/C_39</td><td>09001000/C_39</td><td>        /    </td><td>        /    </td><td>LI TERESA DE JESUS JAVIER</td><td></td></tr>
          <tr><td>SCD1003E</td><td>ARQUITECTURA COMP.</td><td>c05</td><td>05A4</td><td>10001100/C_40</td><td>10001100/C_40</td><td>10001100/C_40</td><td>10001100/C_40</td><td>10001100/C_40</td><td>        /    </td><td>IIE MANUEL ANTONIO RODRIGUEZ</td><td></td></tr>
          <tr><td>SCA1025B</td><td>TALLER BASES DATOS</td><td>c04</td><td>05B2</td><td>14001500/K_54</td><td>14001500/K_54</td><td>14001500/K_54</td><td>        /    </td><td>14001500/K_54</td><td>        /    </td><td>EUTIMIO SOSA SILVA</td><td></td></tr>
          <tr colspan="12"><td colspan="12" class="text-center text-info lead">Otros planes</td></tr>
          <tr><td>AEC1034A</td><td>FUND. TELECOM.</td><td>c04</td><td>05A1</td><td>07000800/C_40</td><td>07000800/C_40</td><td>07000800/C_40</td><td>07000800/C_40</td><td>        /    </td><td>        /    </td><td>ING. MIGUEL ANGEL MARTINE</td><td></td></tr>
          <tr><td>SCC1010A</td><td>GRAFICACION</td><td>c04</td><td>05A2</td><td>08000900/C_40</td><td>08000900/C_40</td><td>08000900/C_40</td><td>08000900/C_40</td><td>        /    </td><td>        /    </td><td>MIS JESUS JUNIOR CANALES</td><td></td></tr>
          <tr><td>SCA1025A</td><td>TALLER BASES DATOS</td><td>c04</td><td>05A3</td><td>09001000/C_39</td><td>09001000/C_39</td><td>09001000/C_39</td><td>09001000/C_39</td><td>        /    </td><td>        /    </td><td>LI TERESA DE JESUS JAVIER</td><td></td></tr>
          <tr><td>SCD1003E</td><td>ARQUITECTURA COMP.</td><td>c05</td><td>05A4</td><td>10001100/C_40</td><td>10001100/C_40</td><td>10001100/C_40</td><td>10001100/C_40</td><td>10001100/C_40</td><td>        /    </td><td>IIE MANUEL ANTONIO RODRIGUEZ</td><td></td></tr>
          <tr><td>SCA1025B</td><td>TALLER BASES DATOS</td><td>c04</td><td>05B2</td><td>14001500/K_54</td><td>14001500/K_54</td><td>14001500/K_54</td><td>        /    </td><td>14001500/K_54</td><td>        /    </td><td>EUTIMIO SOSA SILVA</td><td></td></tr>
          <tr><td>AEC1034A</td><td>FUND. TELECOM.</td><td>c04</td><td>05A1</td><td>07000800/C_40</td><td>07000800/C_40</td><td>07000800/C_40</td><td>07000800/C_40</td><td>        /    </td><td>        /    </td><td>ING. MIGUEL ANGEL MARTINE</td><td></td></tr>
          <tr><td>SCC1010A</td><td>GRAFICACION</td><td>c04</td><td>05A2</td><td>08000900/C_40</td><td>08000900/C_40</td><td>08000900/C_40</td><td>08000900/C_40</td><td>        /    </td><td>        /    </td><td>MIS JESUS JUNIOR CANALES</td><td></td></tr>
          <tr><td>SCA1025A</td><td>TALLER BASES DATOS</td><td>c04</td><td>05A3</td><td>09001000/C_39</td><td>09001000/C_39</td><td>09001000/C_39</td><td>09001000/C_39</td><td>        /    </td><td>        /    </td><td>LI TERESA DE JESUS JAVIER</td><td></td></tr>
          <tr><td>SCD1003E</td><td>ARQUITECTURA COMP.</td><td>c05</td><td>05A4</td><td>10001100/C_40</td><td>10001100/C_40</td><td>10001100/C_40</td><td>10001100/C_40</td><td>10001100/C_40</td><td>        /    </td><td>IIE MANUEL ANTONIO RODRIGUEZ</td><td></td></tr>
          <tr><td>SCA1025B</td><td>TALLER BASES DATOS</td><td>c04</td><td>05B2</td><td>14001500/K_54</td><td>14001500/K_54</td><td>14001500/K_54</td><td>        /    </td><td>14001500/K_54</td><td>        /    </td><td>EUTIMIO SOSA SILVA</td><td></td></tr>
          <tr><td>AEC1034A</td><td>FUND. TELECOM.</td><td>c04</td><td>05A1</td><td>07000800/C_40</td><td>07000800/C_40</td><td>07000800/C_40</td><td>07000800/C_40</td><td>        /    </td><td>        /    </td><td>ING. MIGUEL ANGEL MARTINE</td><td></td></tr>
          <tr><td>SCC1010A</td><td>GRAFICACION</td><td>c04</td><td>05A2</td><td>08000900/C_40</td><td>08000900/C_40</td><td>08000900/C_40</td><td>08000900/C_40</td><td>        /    </td><td>        /    </td><td>MIS JESUS JUNIOR CANALES</td><td></td></tr>
          <tr><td>SCA1025A</td><td>TALLER BASES DATOS</td><td>c04</td><td>05A3</td><td>09001000/C_39</td><td>09001000/C_39</td><td>09001000/C_39</td><td>09001000/C_39</td><td>        /    </td><td>        /    </td><td>LI TERESA DE JESUS JAVIER</td><td></td></tr>
          <tr><td>SCD1003E</td><td>ARQUITECTURA COMP.</td><td>c05</td><td>05A4</td><td>10001100/C_40</td><td>10001100/C_40</td><td>10001100/C_40</td><td>10001100/C_40</td><td>10001100/C_40</td><td>        /    </td><td>IIE MANUEL ANTONIO RODRIGUEZ</td><td></td></tr>
          <tr><td>SCA1025B</td><td>TALLER BASES DATOS</td><td>c04</td><td>05B2</td><td>14001500/K_54</td><td>14001500/K_54</td><td>14001500/K_54</td><td>        /    </td><td>14001500/K_54</td><td>        /    </td><td>EUTIMIO SOSA SILVA</td><td></td></tr>

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
        title:"Grupos en preparacion",
        meta:[
          { hid: 'description', name:"description" , content:"Grupos que pueden abrirse para alumnos del ITVH" }
        ]
      }
    }
  }
</script>


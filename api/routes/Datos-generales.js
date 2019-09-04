const { Router } = require('express')

const router = Router()

/* GET users listing. */
router.get('/alum/:control', function (req, res, next) {
  const user={
    Nombre:"EDER REYES CASTELLANOS",
    Carrera:"(11) ING.SIST.COMP.",
    Plan_Estudios:	"(2) ISIC-2010-224 DE 260 CREDITOS",
    Módulo_Especialidad:"",
    Creditos_acumulados:112.0,
    Situacion_vigencia:	"Vigente",
    Periodo_ingreso:"(2173) AGODIC2017",
    Número_Periodos_Convalidado:00,
    Periodo_Actual:	04,
    Clave_CURP:	"RECE990301HTCYSD0",
    Fecha_Nacimiento:	"1999-03-01",
    Calle:"GARDENIAS EDIF C1",
    Num_DPTO: 203,
    Colonia:"INDECO",
    Ciudad:"VILLAHERMOSA",
    CP:	"86017",
    Teléfono_Domicilio:	"9933639466",
    Teléfono_Celular:	"9932810619",
    Correo_Electrónico: "ederastonmartin@hotmail.com",
    Escuela_Procedencia:	"(0047) C.E.T.I.S. Nº 70, (27004) CENTRO",
    Tutor:	"LIC. JANET CABRERA MORALES"
  }

  setTimeout(() => {
    res.json(user)
  }, 5000);
})

/* GET user by ID. */
// router.get('/users/:id', function (req, res, next) {
//   const id = parseInt(req.params.id)
//   if (id >= 0 && id < users.length) {
//     res.json(users[id])
//   } else {
//     res.sendStatus(404)
//   }
// })

module.exports = router

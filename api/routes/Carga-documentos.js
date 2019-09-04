const { Router } = require('express')

const router = Router()

/* GET users listing. */
router.post('/alum/data/:control', function (req, res, next) {
  const user={
    CURP:	"RECE990301HTCYSD03",
    Nombre:	"EDER REYES CASTELLANOS",
    Carrera:	"(11) ING.SIST.COMP.",
    Foto: "/17301148.jpg"
  }

  setTimeout(() => {
    res.json(user)
  }, 7000);
})

module.exports = router

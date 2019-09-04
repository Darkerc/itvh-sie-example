const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const DatosGenerales = require('./routes/Datos-generales')
const CargaDocumentos = require('./routes/Carga-documentos')

// Import API Routes
app.use(DatosGenerales)
app.use(CargaDocumentos)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}

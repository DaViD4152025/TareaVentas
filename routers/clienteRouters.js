// routers/clienteRouters.js
const express = require("express")
const router = express.Router()
const clienteController = require("../controllers/clienteController")

// Ruta raíz - devuelve información sobre los endpoints disponibles
router.get("/", (req, res) => {
  res.json({
    mensaje: "API de Clientes",
    endpoints: {
      "GET /": "Información de la API",
      "GET /todos": "Obtener todos los clientes",
      "GET /id/:id": "Obtener cliente por ID",
      "GET /dni/:dni": "Obtener cliente por DNI",
      "POST /": "Crear nuevo cliente",
      "PUT /id/:id": "Actualizar cliente por ID",
      "PUT /dni/:dni": "Actualizar cliente por DNI",
      "DELETE /id/:id": "Eliminar cliente por ID",
      "DELETE /dni/:dni": "Eliminar cliente por DNI",
    },
  })
})

// Endpoint para obtener todos los clientes (movido a /todos para evitar conflicto con la ruta raíz)
router.get("/todos", (req, res) => clienteController.getClientes(req, res))

// Rutas básicas CRUD
router.get("/id/:id", (req, res) => clienteController.getClienteById(req, res))
router.post("/", (req, res) => clienteController.createCliente(req, res))
router.put("/id/:id", (req, res) => clienteController.updateCliente(req, res))
router.delete("/id/:id", (req, res) => clienteController.deleteCliente(req, res))

// Rutas específicas para operaciones por DNI
router.get("/dni/:dni", (req, res) => clienteController.getClienteByDni(req, res))
router.put("/dni/:dni", (req, res) => clienteController.updateClienteByDni(req, res))
router.delete("/dni/:dni", (req, res) => clienteController.deleteClienteByDni(req, res))

// Endpoint de prueba simple
router.get("/test", (req, res) => {
  res.json({
    mensaje: "La API de clientes está funcionando correctamente",
    timestamp: new Date().toISOString(),
  })
})

module.exports = router

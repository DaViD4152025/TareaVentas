// server.js
//importamos las dependencias
const express = require("express") //para el manejo de solicitudes http

const cors = require("cors") //habilita los cors en la aplicacion para la comunicacion
const productRoutes = require("./routers/productRouters") // Rutas de productos
const clienteRoutes = require("./routers/clienteRouters") // Rutas de clientes

class Server {
  //clase para encapsular la configuracion y el arranque del servidor
  constructor() {
    this.app = express()
    this.config()
    this.routes()
    this.handleErrors()
  }

  config() {
    //metdo config
    this.app.use(express.json())
    this.app.use(cors())
  }

  routes() {
    //metodo routes
    this.app.use("/productos", productRoutes) // Ruta en plural
    this.app.use("/producto", productRoutes) // Ruta en singular
    this.app.use("/clientes", clienteRoutes) // Ruta en plural
    this.app.use("/cliente", clienteRoutes) // Ruta en singular (añadida)

    // Ruta raíz para información de la API
    this.app.get("/", (req, res) => {
      res.json({
        mensaje: "API REST para gestión de productos y clientes",
        rutas: {
          productos: "/productos",
          clientes: "/clientes",
          test: "/test",
        },
      })
    })

    // Endpoint de prueba global
    this.app.get("/test", (req, res) => {
      res.json({
        mensaje: "La API está funcionando correctamente",
        timestamp: new Date().toISOString(),
        entorno: process.env.NODE_ENV || "desarrollo",
      })
    })
  }

  handleErrors() {
    // Middleware para manejar rutas no encontradas
    this.app.use((req, res, next) => {
      res.status(404).json({
        mensaje: `Ruta no encontrada: ${req.method} ${req.url}`,
        sugerencias: {
          api_info: "GET /",
          test: "GET /test",
          productos: "GET /productos",
          clientes: "GET /clientes",
        },
      })
    })

    // Middleware para manejar errores
    this.app.use((err, req, res, next) => {
      console.error(err.stack)
      res.status(500).json({
        mensaje: "Error interno del servidor",
        error: process.env.NODE_ENV === "production" ? "Detalles ocultos en producción" : err.message,
      })
    })
  }

  start() {
    const PORT = process.env.PORT || 3000
    this.app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`)
      console.log(`API disponible en http://localhost:${PORT}`)
      console.log(`Prueba la API: http://localhost:${PORT}/test`)
    })
  }
}

const server = new Server()
server.start()

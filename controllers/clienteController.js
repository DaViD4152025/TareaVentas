// controllers/clienteController.js
const clienteService = require("../services/clienteService")
const { handleError } = require("../utils/errorHandler")

class ClienteController {
  // Obtener todos los clientes
  async getClientes(req, res) {
    try {
      const clientes = await clienteService.getClientes()
      res.json(clientes)
    } catch (error) {
      console.error(error)
      handleError(res, { category: "CLIENTE", type: "GET_ERROR" }, error)
    }
  }

  // Obtener un cliente por ID
  async getClienteById(req, res) {
    const { id } = req.params
    try {
      const cliente = await clienteService.getClienteById(id)
      if (!cliente) {
        return handleError(res, { category: "CLIENTE", type: "NOT_FOUND" })
      }
      res.json(cliente)
    } catch (error) {
      console.error(error)
      handleError(res, { category: "CLIENTE", type: "GET_ERROR" }, error)
    }
  }

  // Obtener un cliente por DNI
  async getClienteByDni(req, res) {
    const { dni } = req.params
    try {
      const cliente = await clienteService.getClienteByDni(dni)
      if (!cliente) {
        return handleError(res, { category: "CLIENTE", type: "NOT_FOUND" })
      }
      res.json(cliente)
    } catch (error) {
      console.error(error)
      handleError(res, { category: "CLIENTE", type: "GET_BY_DNI_ERROR" }, error)
    }
  }

  // Crear un nuevo cliente
  async createCliente(req, res) {
    try {
      const { dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento } = req.body
      const newCliente = await clienteService.addCliente({
        dni,
        nombre,
        apellido_paterno,
        apellido_materno,
        fecha_nacimiento,
      })
      res.status(201).json(newCliente)
    } catch (error) {
      console.error(error)
      handleError(res, { category: "CLIENTE", type: "CREATE_ERROR" }, error)
    }
  }

  // Actualizar un cliente por ID
  async updateCliente(req, res) {
    try {
      const { id } = req.params
      const { dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento } = req.body
      const updatedCliente = await clienteService.updateCliente(id, {
        dni,
        nombre,
        apellido_paterno,
        apellido_materno,
        fecha_nacimiento,
      })
      if (!updatedCliente) {
        return handleError(res, { category: "CLIENTE", type: "NOT_FOUND" })
      }
      res.json(updatedCliente)
    } catch (error) {
      console.error(error)
      handleError(res, { category: "CLIENTE", type: "UPDATE_ERROR" }, error)
    }
  }

  // Actualizar un cliente por DNI
  async updateClienteByDni(req, res) {
    try {
      const { dni } = req.params
      const { nombre, apellido_paterno, apellido_materno, fecha_nacimiento } = req.body
      const updatedCliente = await clienteService.updateClienteByDni(dni, {
        nombre,
        apellido_paterno,
        apellido_materno,
        fecha_nacimiento,
      })
      if (!updatedCliente) {
        return handleError(res, { category: "CLIENTE", type: "NOT_FOUND" })
      }
      res.json(updatedCliente)
    } catch (error) {
      console.error(error)
      handleError(res, { category: "CLIENTE", type: "UPDATE_ERROR" }, error)
    }
  }

  // Eliminar un cliente por ID
  async deleteCliente(req, res) {
    try {
      const { id } = req.params
      await clienteService.deleteCliente(id)
      res.status(204).send() // No content
    } catch (error) {
      console.error(error)
      handleError(res, { category: "CLIENTE", type: "DELETE_ERROR" }, error)
    }
  }

  // Eliminar un cliente por DNI
  async deleteClienteByDni(req, res) {
    try {
      const { dni } = req.params
      await clienteService.deleteClienteByDni(dni)
      res.status(204).send() // No content
    } catch (error) {
      console.error(error)
      handleError(res, { category: "CLIENTE", type: "DELETE_ERROR" }, error)
    }
  }
}

module.exports = new ClienteController()

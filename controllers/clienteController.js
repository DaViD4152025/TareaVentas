// controllers/clienteController.js
const clienteService = require("../services/clienteService")
<<<<<<< HEAD
const { handleError } = require("../utils/errorHandler")
=======
>>>>>>> 563ce3bd7175d67041463a16cd60411bbce6799a

class ClienteController {
  // Obtener todos los clientes
  async getClientes(req, res) {
    try {
      const clientes = await clienteService.getClientes()
      res.json(clientes)
    } catch (error) {
      console.error(error)
<<<<<<< HEAD
      handleError(res, { category: "CLIENTE", type: "GET_ERROR" }, error)
=======
      res.status(500).json({ mensaje: "Error al obtener clientes" })
>>>>>>> 563ce3bd7175d67041463a16cd60411bbce6799a
    }
  }

  // Obtener un cliente por ID
  async getClienteById(req, res) {
    const { id } = req.params
    try {
      const cliente = await clienteService.getClienteById(id)
      if (!cliente) {
<<<<<<< HEAD
        return handleError(res, { category: "CLIENTE", type: "NOT_FOUND" })
=======
        return res.status(404).json({ mensaje: "Cliente no encontrado" })
>>>>>>> 563ce3bd7175d67041463a16cd60411bbce6799a
      }
      res.json(cliente)
    } catch (error) {
      console.error(error)
<<<<<<< HEAD
      handleError(res, { category: "CLIENTE", type: "GET_ERROR" }, error)
=======
      res.status(500).json({ mensaje: "Error al obtener cliente" })
>>>>>>> 563ce3bd7175d67041463a16cd60411bbce6799a
    }
  }

  // Obtener un cliente por DNI
  async getClienteByDni(req, res) {
    const { dni } = req.params
    try {
      const cliente = await clienteService.getClienteByDni(dni)
      if (!cliente) {
<<<<<<< HEAD
        return handleError(res, { category: "CLIENTE", type: "NOT_FOUND" })
=======
        return res.status(404).json({ mensaje: "Cliente no encontrado" })
>>>>>>> 563ce3bd7175d67041463a16cd60411bbce6799a
      }
      res.json(cliente)
    } catch (error) {
      console.error(error)
<<<<<<< HEAD
      handleError(res, { category: "CLIENTE", type: "GET_BY_DNI_ERROR" }, error)
=======
      res.status(500).json({ mensaje: "Error al obtener cliente por DNI" })
>>>>>>> 563ce3bd7175d67041463a16cd60411bbce6799a
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
<<<<<<< HEAD
      handleError(res, { category: "CLIENTE", type: "CREATE_ERROR" }, error)
=======
      res.status(500).json({ mensaje: "Error al crear cliente" })
>>>>>>> 563ce3bd7175d67041463a16cd60411bbce6799a
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
<<<<<<< HEAD
        return handleError(res, { category: "CLIENTE", type: "NOT_FOUND" })
=======
        return res.status(404).json({ mensaje: "Cliente no encontrado" })
>>>>>>> 563ce3bd7175d67041463a16cd60411bbce6799a
      }
      res.json(updatedCliente)
    } catch (error) {
      console.error(error)
<<<<<<< HEAD
      handleError(res, { category: "CLIENTE", type: "UPDATE_ERROR" }, error)
=======
      res.status(500).json({ mensaje: "Error al actualizar cliente" })
>>>>>>> 563ce3bd7175d67041463a16cd60411bbce6799a
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
<<<<<<< HEAD
        return handleError(res, { category: "CLIENTE", type: "NOT_FOUND" })
=======
        return res.status(404).json({ mensaje: "Cliente no encontrado" })
>>>>>>> 563ce3bd7175d67041463a16cd60411bbce6799a
      }
      res.json(updatedCliente)
    } catch (error) {
      console.error(error)
<<<<<<< HEAD
      handleError(res, { category: "CLIENTE", type: "UPDATE_ERROR" }, error)
=======
      res.status(500).json({ mensaje: "Error al actualizar cliente por DNI" })
>>>>>>> 563ce3bd7175d67041463a16cd60411bbce6799a
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
<<<<<<< HEAD
      handleError(res, { category: "CLIENTE", type: "DELETE_ERROR" }, error)
=======
      res.status(500).json({ mensaje: "Error al eliminar cliente" })
>>>>>>> 563ce3bd7175d67041463a16cd60411bbce6799a
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
<<<<<<< HEAD
      handleError(res, { category: "CLIENTE", type: "DELETE_ERROR" }, error)
=======
      res.status(500).json({ mensaje: "Error al eliminar cliente por DNI" })
>>>>>>> 563ce3bd7175d67041463a16cd60411bbce6799a
    }
  }
}

module.exports = new ClienteController()

// services/clienteService.js
const clienteModel = require("../models/clienteModel")

class ClienteService {
  async getClientes() {
    return await clienteModel.getAllClientes()
  }

  async getClienteById(id) {
    return await clienteModel.getClienteById(id)
  }

  async getClienteByDni(dni) {
    return await clienteModel.getClienteByDni(dni)
  }

  async addCliente(clienteData) {
    return await clienteModel.createCliente(clienteData)
  }

  async updateCliente(id, clienteData) {
    return await clienteModel.updateCliente(id, clienteData)
  }

  async updateClienteByDni(dni, clienteData) {
    return await clienteModel.updateClienteByDni(dni, clienteData)
  }

  async deleteCliente(id) {
    return await clienteModel.deleteCliente(id)
  }

  async deleteClienteByDni(dni) {
    return await clienteModel.deleteClienteByDni(dni)
  }
}

module.exports = new ClienteService()

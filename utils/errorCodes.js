// utils/errorCodes.js
// Archivo que centraliza todos los códigos y mensajes de error de la aplicación

const ERROR_CODES = {
  // Errores generales
  GENERAL: {
    INTERNAL_SERVER_ERROR: {
      code: "GEN-001",
      status: 500,
      message: "Error interno del servidor",
    },
    ROUTE_NOT_FOUND: {
      code: "GEN-002",
      status: 404,
      message: "Ruta no encontrada",
    },
  },

  // Errores relacionados con productos
  PRODUCTO: {
    NOT_FOUND: {
      code: "PROD-001",
      status: 404,
      message: "Producto no encontrado",
    },
    CREATE_ERROR: {
      code: "PROD-002",
      status: 500,
      message: "Error al crear producto",
    },
    UPDATE_ERROR: {
      code: "PROD-003",
      status: 500,
      message: "Error al actualizar producto",
    },
    DELETE_ERROR: {
      code: "PROD-004",
      status: 500,
      message: "Error al eliminar producto",
    },
    GET_ERROR: {
      code: "PROD-005",
      status: 500,
      message: "Error al obtener productos",
    },
  },

  // Errores relacionados con clientes
  CLIENTE: {
    NOT_FOUND: {
      code: "CLI-001",
      status: 404,
      message: "Cliente no encontrado",
    },
    CREATE_ERROR: {
      code: "CLI-002",
      status: 500,
      message: "Error al crear cliente",
    },
    UPDATE_ERROR: {
      code: "CLI-003",
      status: 500,
      message: "Error al actualizar cliente",
    },
    DELETE_ERROR: {
      code: "CLI-004",
      status: 500,
      message: "Error al eliminar cliente",
    },
    GET_ERROR: {
      code: "CLI-005",
      status: 500,
      message: "Error al obtener clientes",
    },
    GET_BY_DNI_ERROR: {
      code: "CLI-006",
      status: 500,
      message: "Error al obtener cliente por DNI",
    },
  },

  // Errores de base de datos
  DATABASE: {
    CONNECTION_ERROR: {
      code: "DB-001",
      status: 500,
      message: "Error de conexión a la base de datos",
    },
    QUERY_ERROR: {
      code: "DB-002",
      status: 500,
      message: "Error en la consulta a la base de datos",
    },
  },
}

module.exports = ERROR_CODES

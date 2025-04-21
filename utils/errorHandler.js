// utils/errorHandler.js
// Manejador centralizado de errores para la aplicación

const ERROR_CODES = require("./errorCodes")

/**
 * Maneja un error y envía una respuesta apropiada
 * @param {Object} res - Objeto de respuesta de Express
 * @param {Object} errorInfo - Información del error (categoría y tipo)
 * @param {Error} originalError - Error original para registro (opcional)
 * @param {Object} additionalInfo - Información adicional para incluir en la respuesta (opcional)
 */
function handleError(res, errorInfo, originalError = null, additionalInfo = {}) {
  // Extraer la categoría y tipo de error
  const { category, type } = errorInfo

  // Obtener el error del catálogo
  const error = ERROR_CODES[category][type]

  if (!error) {
    // Si no se encuentra el error específico, usar error genérico
    console.error("Código de error no definido:", category, type)
    return res.status(500).json({
      errorCode: "UNDEFINED",
      mensaje: "Error no especificado",
      ...additionalInfo,
    })
  }

  // Registrar el error original si está disponible
  if (originalError) {
    console.error(`[${error.code}] ${error.message}:`, originalError)
  }

  // Enviar respuesta con el error
  return res.status(error.status).json({
    errorCode: error.code,
    mensaje: error.message,
    ...additionalInfo,
  })
}

/**
 * Maneja errores de rutas no encontradas
 * @param {Object} req - Objeto de solicitud de Express
 * @param {Object} res - Objeto de respuesta de Express
 */
function handleRouteNotFound(req, res) {
  const error = ERROR_CODES.GENERAL.ROUTE_NOT_FOUND

  return res.status(error.status).json({
    errorCode: error.code,
    mensaje: `${error.message}: ${req.method} ${req.url}`,
    sugerencias: {
      api_info: "GET /",
      test: "GET /test",
      productos: "GET /productos",
      clientes: "GET /clientes",
    },
  })
}

/**
 * Middleware para manejar errores generales
 */
function errorMiddleware(err, req, res, next) {
  const error = ERROR_CODES.GENERAL.INTERNAL_SERVER_ERROR

  console.error("[ERROR]", err)

  return res.status(error.status).json({
    errorCode: error.code,
    mensaje: error.message,
    detalles: process.env.NODE_ENV === "production" ? "Detalles ocultos en producción" : err.message,
  })
}

module.exports = {
  handleError,
  handleRouteNotFound,
  errorMiddleware,
}

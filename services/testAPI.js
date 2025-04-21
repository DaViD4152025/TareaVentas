const http = require("http")

// URLs a probar
const endpoints = [
  { url: "http://localhost:3000/", name: "API Root" },
  { url: "http://localhost:3000/test", name: "Test Endpoint" },
  { url: "http://localhost:3000/cliente", name: "Cliente Root" },
  { url: "http://localhost:3000/cliente/test", name: "Cliente Test" },
  { url: "http://localhost:3000/clientes", name: "Clientes Root" },
  { url: "http://localhost:3000/clientes/test", name: "Clientes Test" },
]

// Función para probar un endpoint
function testEndpoint(endpoint) {
  return new Promise((resolve, reject) => {
    http
      .get(endpoint.url, (res) => {
        let data = ""

        res.on("data", (chunk) => {
          data += chunk
        })

        res.on("end", () => {
          resolve({
            name: endpoint.name,
            url: endpoint.url,
            status: res.statusCode,
            success: res.statusCode >= 200 && res.statusCode < 300,
            data: tryParseJSON(data),
          })
        })
      })
      .on("error", (err) => {
        reject({
          name: endpoint.name,
          url: endpoint.url,
          error: err.message,
        })
      })
  })
}

// Intenta parsear JSON, devuelve el texto original si falla
function tryParseJSON(text) {
  try {
    return JSON.parse(text)
  } catch (e) {
    return text
  }
}

// Probar todos los endpoints
async function testAllEndpoints() {
  console.log("Probando API...")
  console.log("=".repeat(50))

  try {
    for (const endpoint of endpoints) {
      try {
        const result = await testEndpoint(endpoint)
        console.log(
          `${result.name} (${result.url}): ${result.success ? "✅ OK" : "❌ ERROR"} - Status: ${result.status}`,
        )
        if (result.success) {
          console.log("Respuesta:", JSON.stringify(result.data, null, 2))
        } else {
          console.log("Error:", result.data)
        }
      } catch (err) {
        console.log(`${endpoint.name} (${endpoint.url}): ❌ ERROR - ${err.error}`)
      }
      console.log("-".repeat(50))
    }
  } catch (error) {
    console.error("Error al probar la API:", error)
  }
}

// Ejecutar las pruebas
testAllEndpoints()

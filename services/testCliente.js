const db = require("./config/db")
;(async () => {
  try {
    const result = await db.query("SELECT * FROM cliente LIMIT 1")
    if (result.rows.length > 0) {
      console.log("Conexión exitosa a la tabla cliente. Primer registro:", result.rows[0])
    } else {
      console.log("Conexión exitosa a la tabla cliente, pero no hay registros.")
    }
  } catch (error) {
    console.error("Error en la conexión a la tabla cliente:", error)
  }
})()

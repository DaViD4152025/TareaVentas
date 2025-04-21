// Importamos la conexión a la base de datos desde el archivo de configuración
const db = require("../config/db")

// Definimos la clase ProductModel que contiene métodos para interactuar con la base de datos
class ProductModel {
  // Método para obtener todos los registros de la tabla 'producto'
  async getAllProducts() {
    const result = await db.query("SELECT * FROM producto")
    return result.rows // Retorna todos los registros como un arreglo
  }

  // Método para obtener un único producto según su ID
  async getProductById(id) {
    const result = await db.query("SELECT * FROM producto WHERE id = $1", [id])
    return result.rows[0] // Retorna solo el primer (y único) resultado
  }

  // Método para insertar un nuevo producto en la base de datos
  async createProduct({ nombre, precio, descripcion }) {
    const result = await db.query(
      // Utiliza placeholders ($1, $2, $3) para evitar inyecciones SQL
      "INSERT INTO producto (nombre, precio, descripcion) VALUES ($1, $2, $3) RETURNING *",
      [nombre, precio, descripcion], // Valores a insertar
    )
    return result.rows[0] // Retorna el nuevo registro insertado
  }

  // Método para actualizar un producto existente en base a su ID
  async updateProduct(id, { nombre, precio, descripcion }) {
    const result = await db.query(
      // Actualiza los campos especificados en el registro que coincida con el ID
      "UPDATE producto SET nombre = $1, precio = $2, descripcion = $3 WHERE id = $4 RETURNING *",
      [nombre, precio, descripcion, id], // Nuevos valores y el ID del producto
    )
    return result.rows[0] // Retorna el registro actualizado
  }

  // Método para eliminar un producto por su ID
  async deleteProduct(id) {
    await db.query("DELETE FROM producto WHERE id = $1", [id])
    // No es necesario retornar nada, ya que solo se elimina el registro
  }
}

// Exportamos una instancia de la clase para poder usar sus métodos directamente
module.exports = new ProductModel()

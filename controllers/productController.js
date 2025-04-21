// controllers/productController.js

const productService = require("../services/productService")

class ProductController {
  // req y res son objetos
  async getProducts(req, res) {
    try {
      const products = await productService.getProducts()
      res.json(products)
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: "Error al obtener productos" })
    }
  }

  async getProductById(req, res) {
    const { id } = req.params //(/producto /id:1)
    try {
      const product = await productService.getProductById(id)
      if (!product) {
        return res.status(404).json({ mensaje: "Producto no encontrado" })
      }
      res.json(product)
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: "Error al obtener producto" })
    }
  }

  async createProduct(req, res) {
    try {
      const { nombre, precio, descripcion } = req.body
      const newProduct = await productService.addProduct({ nombre, precio, descripcion })
      res.status(201).json(newProduct)
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: "Error al crear producto" })
    }
  }

  async updateProduct(req, res) {
    try {
      const { id } = req.params
      const { nombre, precio, descripcion } = req.body
      const updatedProduct = await productService.updateProduct(id, { nombre, precio, descripcion })
      if (!updatedProduct) {
        return res.status(404).json({ mensaje: "Producto no encontrado" })
      }
      res.json(updatedProduct)
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: "Error al actualizar producto" })
    }
  }

  async deleteProduct(req, res) {
    try {
      const { id } = req.params
      await productService.deleteProduct(id)
      res.status(204).send() // No content
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: "Error al eliminar producto" })
    }
  }
}

module.exports = new ProductController()

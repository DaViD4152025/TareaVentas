// controllers/productController.js

const productService = require("../services/productService")
<<<<<<< HEAD
const { handleError } = require("../utils/errorHandler")
=======
>>>>>>> 563ce3bd7175d67041463a16cd60411bbce6799a

class ProductController {
  // req y res son objetos
  async getProducts(req, res) {
    try {
      const products = await productService.getProducts()
      res.json(products)
    } catch (error) {
      console.error(error)
<<<<<<< HEAD
      handleError(res, { category: "PRODUCTO", type: "GET_ERROR" }, error)
=======
      res.status(500).json({ mensaje: "Error al obtener productos" })
>>>>>>> 563ce3bd7175d67041463a16cd60411bbce6799a
    }
  }

  async getProductById(req, res) {
    const { id } = req.params //(/producto /id:1)
    try {
      const product = await productService.getProductById(id)
      if (!product) {
<<<<<<< HEAD
        return handleError(res, { category: "PRODUCTO", type: "NOT_FOUND" })
=======
        return res.status(404).json({ mensaje: "Producto no encontrado" })
>>>>>>> 563ce3bd7175d67041463a16cd60411bbce6799a
      }
      res.json(product)
    } catch (error) {
      console.error(error)
<<<<<<< HEAD
      handleError(res, { category: "PRODUCTO", type: "GET_ERROR" }, error)
=======
      res.status(500).json({ mensaje: "Error al obtener producto" })
>>>>>>> 563ce3bd7175d67041463a16cd60411bbce6799a
    }
  }

  async createProduct(req, res) {
    try {
      const { nombre, precio, descripcion } = req.body
      const newProduct = await productService.addProduct({ nombre, precio, descripcion })
      res.status(201).json(newProduct)
    } catch (error) {
      console.error(error)
<<<<<<< HEAD
      handleError(res, { category: "PRODUCTO", type: "CREATE_ERROR" }, error)
=======
      res.status(500).json({ mensaje: "Error al crear producto" })
>>>>>>> 563ce3bd7175d67041463a16cd60411bbce6799a
    }
  }

  async updateProduct(req, res) {
    try {
      const { id } = req.params
      const { nombre, precio, descripcion } = req.body
      const updatedProduct = await productService.updateProduct(id, { nombre, precio, descripcion })
      if (!updatedProduct) {
<<<<<<< HEAD
        return handleError(res, { category: "PRODUCTO", type: "NOT_FOUND" })
=======
        return res.status(404).json({ mensaje: "Producto no encontrado" })
>>>>>>> 563ce3bd7175d67041463a16cd60411bbce6799a
      }
      res.json(updatedProduct)
    } catch (error) {
      console.error(error)
<<<<<<< HEAD
      handleError(res, { category: "PRODUCTO", type: "UPDATE_ERROR" }, error)
=======
      res.status(500).json({ mensaje: "Error al actualizar producto" })
>>>>>>> 563ce3bd7175d67041463a16cd60411bbce6799a
    }
  }

  async deleteProduct(req, res) {
    try {
      const { id } = req.params
      await productService.deleteProduct(id)
      res.status(204).send() // No content
    } catch (error) {
      console.error(error)
<<<<<<< HEAD
      handleError(res, { category: "PRODUCTO", type: "DELETE_ERROR" }, error)
=======
      res.status(500).json({ mensaje: "Error al eliminar producto" })
>>>>>>> 563ce3bd7175d67041463a16cd60411bbce6799a
    }
  }
}

module.exports = new ProductController()

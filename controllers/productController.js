// controllers/productController.js

const productService = require("../services/productService")
const { handleError } = require("../utils/errorHandler")

class ProductController {
  // req y res son objetos
  async getProducts(req, res) {
    try {
      const products = await productService.getProducts()
      res.json(products)
    } catch (error) {
      console.error(error)
      handleError(res, { category: "PRODUCTO", type: "GET_ERROR" }, error)
    }
  }

  async getProductById(req, res) {
    const { id } = req.params //(/producto /id:1)
    try {
      const product = await productService.getProductById(id)
      if (!product) {
        return handleError(res, { category: "PRODUCTO", type: "NOT_FOUND" })
      }
      res.json(product)
    } catch (error) {
      console.error(error)
      handleError(res, { category: "PRODUCTO", type: "GET_ERROR" }, error)
    }
  }

  async createProduct(req, res) {
    try {
      const { nombre, precio, descripcion } = req.body
      const newProduct = await productService.addProduct({ nombre, precio, descripcion })
      res.status(201).json(newProduct)
    } catch (error) {
      console.error(error)
      handleError(res, { category: "PRODUCTO", type: "CREATE_ERROR" }, error)
    }
  }

  async updateProduct(req, res) {
    try {
      const { id } = req.params
      const { nombre, precio, descripcion } = req.body
      const updatedProduct = await productService.updateProduct(id, { nombre, precio, descripcion })
      if (!updatedProduct) {
        return handleError(res, { category: "PRODUCTO", type: "NOT_FOUND" })
      }
      res.json(updatedProduct)
    } catch (error) {
      console.error(error)
      handleError(res, { category: "PRODUCTO", type: "UPDATE_ERROR" }, error)
    }
  }

  async deleteProduct(req, res) {
    try {
      const { id } = req.params
      await productService.deleteProduct(id)
      res.status(204).send() // No content
    } catch (error) {
      console.error(error)
      handleError(res, { category: "PRODUCTO", type: "DELETE_ERROR" }, error)
    }
  }
}

module.exports = new ProductController()

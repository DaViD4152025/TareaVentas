// services/productService.js
const productModel = require("../models/productModel")

class ProductService {
  async getProducts() {
    return await productModel.getAllProducts()
  }

  async getProductById(id) {
    return await productModel.getProductById(id)
  }

  async addProduct(productData) {
    return await productModel.createProduct(productData)
  }

  async updateProduct(id, productData) {
    return await productModel.updateProduct(id, productData)
  }

  async deleteProduct(id) {
    return await productModel.deleteProduct(id)
  }
}

module.exports = new ProductService()

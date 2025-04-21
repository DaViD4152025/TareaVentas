<<<<<<< HEAD
const express = require("express")
const router = express.Router()
const productController = require("../controllers/productController")

router.get("/", (req, res) => productController.getProducts(req, res)) // Obtener todos los productos
router.get("/:id", (req, res) => productController.getProductById(req, res)) // Obtener un producto por ID
router.post("/", (req, res) => productController.createProduct(req, res)) // Crear un nuevo producto
router.put("/:id", (req, res) => productController.updateProduct(req, res)) // Actualizar un producto por ID
router.delete("/:id", (req, res) => productController.deleteProduct(req, res)) // Eliminar un producto por ID

module.exports = router // Exportar el router para usarlo en otros archivos
=======
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', (req, res) => productController.getProducts(req, res)); // Obtener todos los productos
router.get('/:id', (req, res) => productController.getProductById(req, res)); // Obtener un producto por ID
router.post('/', (req, res) => productController.createProduct(req, res)); // Crear un nuevo producto
router.put('/:id', (req, res) => productController.updateProduct(req, res)); // Actualizar un producto por ID
router.delete('/:id', (req, res) => productController.deleteProduct(req, res)); // Eliminar un producto por ID

module.exports = router; // Exportar el router para usarlo en otros archivos 
>>>>>>> 563ce3bd7175d67041463a16cd60411bbce6799a

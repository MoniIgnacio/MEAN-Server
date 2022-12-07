const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");

router.post("/", productoController.crearProducto);
router.get("/", productoController.obtenerProductos);
router.put("/:productoId", productoController.actualizarProducto);
router.get("/:productoId", productoController.obtenerProducto);

module.exports = router;

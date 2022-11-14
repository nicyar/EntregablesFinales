const route = require("express").Router();
const {
  getAllCart,
  getById,
  createCart,
  deleteOneCart,
  createOneProduct,
  deleteProduct,
} = require("../controllers/constrolsCart");

/* Endpoints Cart  */
route.post("/", createCart);
route.delete("/:id", deleteOneCart);
route.get("/", getAllCart); //Permite ver todos los carritos con sus productos
route.get("/:id/productos", getById); //Permite ver los productos de un carrito especificado por su ID
route.post("/:id/productos", createOneProduct);
route.delete("/:id/productos/:id_prod", deleteProduct);

module.exports = route;
const { Router } = require("express");
const cartsController = require("../../controllers/cart.controller");

const router = Router();

router.get('/:id',cartsController.getCart)
router.delete('/:id/eliminar/:id_prod', cartsController.deleteCartProduct)
router.post( '/:id/agregar/:id_prod',cartsController.addToCart)
router.post('/create',cartsController.createCart)

module.exports = router
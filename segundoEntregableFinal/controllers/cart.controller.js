
const { HTTP_STATUS } = require("../constants/api.constants");
const { CartDao} = require("../models/daos/app.daos");
const { successResponse } = require("../utils/api.utils");

const cartsDao = new CartDao();

class CartController{

    async getCart(req,res,next){
        try {
            const cart =await cartsDao.getProductToCart(req.params.id)
            const response = successResponse(cart)
            res.status(HTTP_STATUS.OK).json(response)
        } catch (error) {
            next(error)
        }
    }
    async deleteCartProduct(req,res,next){
        try {
            const cart = await cartsDao.deleteProductToCart(req.params.id,req.params.id_prod)
            const response = successResponse(cart)
            res.status(HTTP_STATUS.OK).json(response)
        } catch (error) {
            next(error)
        }
    }
    async addToCart(req,res,next){
        try {
            const cart = await cartsDao.addProductToCar(req.params.id,req.params.id_prod)
            const response = successResponse(cart)
            res.status(HTTP_STATUS.CREATED).json(response)
        } catch (error) {
            next(error)
        }
    }

    async createCart(req,res,next){
        try {
            const cart = await cartsDao.createCart(req.body)
            const response = successResponse(cart)
            res.status(HTTP_STATUS.CREATED).json(response)
        } catch (error) {
            next(error)
        }
    }

}

module.exports = new CartController();
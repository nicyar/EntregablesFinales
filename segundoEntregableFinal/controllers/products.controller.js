const { HTTP_STATUS } = require("../constants/api.constants");
const { ProductsDao} = require("../models/daos/app.daos");
const { successResponse } = require("../utils/api.utils");

const productsDao = new ProductsDao();

class ProductsController {

  async getProducts(req, res, next) {
    try {
      const products = await productsDao.getAll();
      const response = successResponse(products);
      res.status(HTTP_STATUS.OK).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  async getProductById(req, res, next) {
    const { id } = req.params;
    try {
      const products = await productsDao.getById(id);
      const response = successResponse(products);
      res.status(HTTP_STATUS.OK).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  async saveProduct(req, res, next) {
    try {
      const newProducts = await productsDao.save(req.body);
      const response = successResponse(newProducts);
      res.status(HTTP_STATUS.CREATED).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  async updateProduct(req, res, next) {
    const { id } = req.params;
    try {
      const updateProduct = await productsDao.update(id, req.body);
      const response = successResponse(updateProduct);
      res.status(HTTP_STATUS.OK).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  async deleteProduct(req, res, next) {
    const { id } = req.params;
    try {
      const deletedProduct = await productsDao.delete(id);
      const response = successResponse(deletedProduct);
      res.status(HTTP_STATUS.OK).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  populate(req, res, next) {
    const { qty } = req.query;
    try {
      const products = productsDao.populate(qty);
      const response = successResponse(products);
      res.status(HTTP_STATUS.OK).json(response);
    }
    catch(error) {
      next(error);
    }
  }
}

module.exports = new ProductsController();
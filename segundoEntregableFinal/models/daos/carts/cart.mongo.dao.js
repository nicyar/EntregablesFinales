// Archivo de demostracion. NO se utiliza en este proyecto
// Puede que encuentren incoherencias en el. En el afterclass entenderan por qué.

const { Schema } = require('mongoose');
const MongoContainer = require("../../containers/mongo.container");

const collection = "carts";
const usersSchema = new Schema({
  id: {type: Number, required: true},
  products: {type: [{
    title: {type: String, required: true, max: 25},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    image: {type: String, required: true},
}]}
}, { timestamps: true })
class CartMongoDao extends MongoContainer {
  constructor() {
    super(collection, usersSchema);
  }

  async getProductToCar(idCarrito){
    const product =  this.model.find({},{id:idCarrito},{products:1})
    return product
  }

  async deleteProductToCart(idCarrito,idProd){
    const data = this.model.findOne({},{id:idCarrito},{products:1})
    return await data.this.delete(idProd)
  }

  async addProductToCar(idCarrito, idProducto) {
  
    this.model.updateOne({ _id: idCarrito }, {
      $push: {
        products: [idProducto]
      }
    })
  }

}

module.exports = CartMongoDao;
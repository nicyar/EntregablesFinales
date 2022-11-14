// Archivo de demostracion. NO se utiliza en este proyecto
// Puede que encuentren incoherencias en el. En el afterclass entenderan por qué.

const { Schema } = require('mongoose');
const MongoContainer = require("../../containers/mongo.container");

const collection = "products";
const productsSchema = new Schema({
  description :{ type: String ,required: true, max: 25},
  title: { type: String, required: true },
  price: { type: Number, required: true}, 
  image: { type: String , required: true},
  stock: { type: Number , required: true}
});

class ProductsMongoDao extends MongoContainer {
  constructor() {
    super(collection, productsSchema);
  }
}

module.exports = ProductsMongoDao;
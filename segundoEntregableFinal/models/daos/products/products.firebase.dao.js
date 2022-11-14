// Archivo de demostracion. NO se utiliza en este proyecto
// Puede que encuentren incoherencias en el. En el afterclass entenderan por qué.

const FirebaseContainer = require("../../containers/firebase.container");

const collection = "products";
class ProductsFirebaseDao extends FirebaseContainer {
  constructor() {
    super(collection);
  }
}

module.exports = ProductsFirebaseDao;
const { FieldValue } = require("firebase-admin/firestore");
const FirebaseContainer = require("../../containers/firebase.container");

const collection = "carts";
class CartFirebaseDao extends FirebaseContainer {
  constructor() {
    super(collection);
  }

  async getProductToCart(idCarrito){
    const doc = this.query.doc(idCarrito)
    const item = doc.get()
    const response =item.data().products
    return response
  }

  async deleteProductToCart(idCarrito,idProd){
    const docRef = this.query.get(idCarrito);
    const document = await docRef.get();
    const object = document.data().products;
    return object.this.delete(idProd)

  }

  async addProductToCar(idCarrito, idProducto) {
   const docRef = this.query.doc(idCarrito)
   let back ;
   if(!docRef){
    
    const products = [];
    back = await docRef.set({
      products,
      id:FieldValue.increment(1),
      timestamp: FieldValue.serverTimestamp(),
    })
   }else{
    back = await docRef.update({products:FieldValue.arrayUnion(idProducto)})
   }
    return back;
  }
  async createCart(producto){
    const docRef = this.query.doc();
    return await docRef.set({
      id:FieldValue.increment(1),
      timestamp: FieldValue.serverTimestamp(),
      products:[producto]
    });

  }
}

module.exports = CartFirebaseDao;
const MemoryContainer = require('../../containers/memory.container');

class CartMemoryDao extends MemoryContainer{
    constructor(){
        super();
        this.cart =[];
    }
    async getProductToCart(idCarrito){
        const cartexist =this.items.find(item => item.id ===idCarrito).products;
        return [...cartexist]
    }
    async deleteProductToCart(idCarrito,idProd){
        const cartexist =this.items.find(item => item.id ===idCarrito)
        if (cartexist) {
            const products = cartexist.products;
            const deleteProduct = products.findIndex(item => item.id ===idProd) 
            return products.this.delete(deleteProduct)
        }
    }
    async addProductToCar(idCarrito, idProducto) {
        const exist =this.items.find(item => item.id ===idProducto)
        const cartexist =this.items.find(item => item.id ===idCarrito)
        if (cartexist) {
            this.cart.push(exist)
        } else {
            const carrito = {
                id : length(this.cart) +1,
                products:[
                    {exist}
                ]
            }
            this.cart.push(carrito)
        }
    
        return `El producto fue agregado`
      }
    async createCart(producto){
        const carrito ={
            id : length(this.cart) +1,
            products:[
                {producto}
            ]
        }
        this.cart.push(carrito)
    }
}

module.exports = CartMemoryDao;
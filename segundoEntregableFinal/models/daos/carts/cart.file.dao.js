const FileContainer = require('../../containers/file.container');
const fs = require('fs')
const route = '../../../DB/data/fileCart.txt';
class CartMemoryDao extends FileContainer{
    constructor(){
        super(route);
    }
    async getProductToCar(idCarrito){
        try{
            const data = await FileSystem.promises.readFile(this.route,"utf-8")
            const objetos = data ? (JSON.parse(data)) : []
            const carrito = objetos.find(elem => elem.id == idCarrito);
            
            return carrito.products;

        }catch(err){

            console.log(err)
        }

    }
    async deleteProductToCart(idCarrito,idProd){
        const prods = this.getProductToCar(idCarrito)
        const deleteProd = prods.getById(idProd)
        try{
        let contenidoNuevo = prods;
        contenidoNuevo.splice(deleteProd,1)
        await fs.promises.writeFile(this.route, JSON.stringify(contenidoNuevo, null, 2));
        res.json({Mensaje: "Carrito eliminado"});
    }catch(e){
        console.log(e)
    }
    }
    async addProductToCar(idCarrito, idProducto) {
        try{
            let back;
            const data = await fs.promises.readFile(this.route,"utf-8")
            const objetos = data ? (JSON.parse(data)) : []
            const carrito = objetos.find(elem => elem.id == idCarrito);
            if(!carrito ){
                const cart = {
                    id: length(objetos)+1,
                    products:[
                        {idProducto}
                    ]
                }
                back = await fs.promises.writeFile(this.route,JSON.stringify(cart,null,2))
            }

            else{
                const elem =carrito.products
                elem.push({idProducto})
                back = await fs.promises.appendFile(this.route,JSON.stringify(elem,null,2))
            }

        }catch(err){

            console.log(err)
        }
      }
      
}

module.exports = CartMemoryDao;
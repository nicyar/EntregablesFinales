const fs = require('fs')
class Contenedor {
    constructor(route) {
        this.route = route
    }

    async save(product) {
        try {
            let read = await fs.promises.readFile(`./${this.route}`,'utf-8')
            let readJson = JSON.parse(read)
            let amountProducts = readJson.length
            if (amountProducts) {
                product.id = amountProducts + 1
            } else {
                product.id = 1
            }
            let id = product.id
            readJson.push(product)
            await fs.promises.writeFile(`./${this.route}`,JSON.stringify(readJson, null, 2))
            return `el id asignado es: ${id}`
        } catch (error) {
            console.log(error)
        }
    }
    async getById(id) {
        try {
            let read = await fs.promises.readFile(this.route,'utf-8')
            let readJson = JSON.parse(read)
            let num = parseInt(id)
            let back
            const productFound = readJson.find(element => element.id === num)
            if (productFound) {
                back = { productFound }
            } else {
                back = null
            }
            return back
        } catch (error) {
            console.log(error)
        }


    }
    async getAll() {
      
        try {
            let read = await fs.promises.readFile(this.route, 'utf-8')
            let readJson = JSON.parse(read)
            return readJson
        } catch (error) {
            console.log(error);
        }
       
    }
    async delete(id) {
       try {
        let contenido = await fs.promises.readFile(this.route,"utf-8")
        let contendioParseado = JSON.parse(contenido);
        let nuevoContenido = contendioParseado.filter(
            (element)=>element.id !== id 
        );//sobrescribo todo menos el que el usuario haya elegido por id
       return  await fs.promises.writeFile(this.route,JSON.stringify(nuevoContenido))
       } catch (error) {
        console.log(error)
       }
    }
    async update(id,item){
        const objetos = this.getAll()
        const prod = objetos.find(elem =>elem.id === id);
        const index = objetos.findIndex(elem =>elem.id === id);
        let newProduct = objetos;
        newProduct[index]=item;
        try{
            await fs.promises.writeFile(this.route,JSON.stringify(newProduct,null,2))
        }catch(e){
            console.log(e)
        }

    }




}


module.exports=Contenedor;
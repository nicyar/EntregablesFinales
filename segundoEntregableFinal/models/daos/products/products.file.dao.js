
const FileContainer = require('../../containers/file.container');

const route = '../../../DB/data/fileProducts';

class ProductsFileDao extends FileContainer{
    constructor(){
        super(route);
    }
}

module.exports = ProductsFileDao;
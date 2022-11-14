const envConfig = require('../config');
const firebaseConfig = require('./firebase/firebase.config.json');

module.exports = {
  file: { // Esta opcion es solo de demostracion
    users: './data/users.json',
    products: './data/products.json'
  },
  mongodb: {
    uri: `mongodb+srv://nicolas:${envConfig.DB_PASSWORD}@coder.0r33awi.mongodb.net/?retryWrites=true&w=majority`
  },
  firebase: {
    credentials: firebaseConfig
  },
}
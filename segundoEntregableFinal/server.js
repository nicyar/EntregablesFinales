const app = require("./app");
const envConfig = require("./config");
const PORT = process.env.PORT || 8080;

const ASYNC_DATASOURCE={
  mongo:require("./models/containers/mongo.container")
}
app.listen(PORT,()=>{
  if(Object.keys(ASYNC_DATASOURCE).includes(envConfig.DATASOURCE||'')){
    ASYNC_DATASOURCE[envConfig.DATASOURCE].connect().then(()=>{
      console.log("connected to " + envConfig.DATASOURCE)
    })
  }
  console.log(`Server is runing in the port:${PORT}`)
})




// const DATASOURCE_BY_ENV = {
//   mongo: require('./models/containers/mongo.container'),
//   firebase: require('./models/containers/firebase.container')
// };

// const dataSource = DATASOURCE_BY_ENV[envConfig.DATASOURCE]


// app.listen(PORT, () => {
// if(!["memory","firebase"].includes(envConfig.DATASOURCE||'')){
//   FirebaseContainer.connect().then(()=>{
//     console.log("connected")
//   }) 
// }
// else{MongoContainer.connect().then(()=>{
//     console.log(`Server is up and running on port: `, PORT);
//     console.log("Connected to " + envConfig.DATASOURCE);
//   })}
  
// });

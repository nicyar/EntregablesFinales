const exprees = require("express");
const apiProducts = require("./routers/products");
const apiCart = require("./routers/cart");
const authorizer = require("./middlewares/authorizer");
const app = exprees();

const PORT = process.env.PORT || 8080;

app.use(exprees.json());
app.use(exprees.urlencoded({ extended: true }));

app.use(authorizer);
app.use("/api/productos", apiProducts);
app.use("/api/carrito", apiCart);

const connectedServer = app.listen(PORT, () => {
  console.log(`🚀Server is connected and listing in the PORT: ${PORT}`);
});

connectedServer.on("error", (error) => {
  console.log(`error:`, error.message);
});
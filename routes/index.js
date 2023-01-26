const routes = require("express").Router();

routes.get("/name", (req, res) => {
  res.send("Cristian Nahuel Alegre Bustos!");
});

routes.get("/test", (req, res) => {
  res.send("Testing Place");
});

routes.use("/", require("./swagger.js"));

module.exports = routes;

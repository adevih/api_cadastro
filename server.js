const express = require("express");
const bodyParser = require("body-parser");
const contratoRoutes = require("./app/routes/contrato.routes.js");
const cors = require(`cors`);

// Criando um Instancia do Express
const app = express();

// Habilitando o Cors
app.use(cors());

// Habilitando Body-Parser   bnnm,,mnmbnbvcvcxasddddddddddd
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Definindo Rotas
app.get("/", (req, res) => {
	res.json({ message: "App rodando!" });
});

require("./app/routes/contrato.routes.js")(app);

var port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("App rodando!");
});

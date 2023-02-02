module.exports = (app) => {
	const contratos = require("../controllers/contrato.controllers");

	// Criando um novo Contrato
	app.post("/cadastros", contratos.create);

	// Pegando todos os contratos
	// app.get('/contratos', contratos.findAll)

	// Pegando contratos por ID
	app.get("/cadastros/:id", contratos.getCadastro);

	// Atualizando contratos
	// app.put('/cadastros', contratos.update)
};

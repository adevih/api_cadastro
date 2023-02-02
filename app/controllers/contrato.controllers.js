// Importando Modulos
const mysql = require("mysql");
const fs = require("fs");
const md5 = require("md5");

const url_db = process.env.url_db;
const user_db = process.env.user_db;
const pass_db = process.env.pass_db;
const access_db = process.env.access_db;
// Credenciando acesso ao Banco de Dados
const connection = mysql.createConnection({
	host: url_db,
	user: user_db,
	password: pass_db,
	database: access_db,
	dialect: "mysql",
});

// Estabelecendo conexão com o Banco de Dados
connection.connect(function (err) {
	if (err) throw err;
	console.log("Conectado ao MYSQL DATABASE");
});

// Criando e salvando Contratos
exports.create = (req, res) => {
	// Validando requisições

	//console.log(req.body.vrsCont)
	if (
		(!req.body.nome,
		!req.body.sobrenome,
		!req.body.dt_nascimento,
		!req.body.sexo,
		!req.body.est_civil,
		!req.body.rg,
		!req.body.cpf,
		!req.body.cel,
		!req.body.email,
		!req.body.nacionalidade,
		!req.body.cep,
		!req.body.estado,
		!req.body.cidade,
		!req.body.endereco,
		!req.body.num_endereco,
		!req.body.complemento)
	) {
		// console.log(res.status)
		return res.status(400).send({
			message: "Status de contado igual a vazio",
		});
	}

	var params = req.body;

	console.log(params);

	// const fieldcalc = { id md5(params.id) };

	// params = Object.assign(params, fieldcalc);

	// console.log(params);

	// Inserindo novos contratos no Banco
	connection.query(
		"INSERT INTO dev_consultor SET ?",
		params,
		function (error, result, fields) {
			if (error) throw error;
			return res.send({
				data: result,
				message: "Contrato criado com sucesso!",
			});
		}
	);
};

// Retornando todos os Contratos
// exports.findAll = (req, res) => {
// 	connection.query(
// 		"select * from cadastro",

// 		function (error, result, fields) {
// 			if (error) throw error;
// 			res.end(JSON.stringify(result));
// 			let teste = result;
// 			console.log(teste[1].id);
// 		}
// 	);
// };

// Pegando Unico Registro
exports.getCadastro = (req, res) => {
	//connection.query('select *, DATE_FORMAT(dataCont,"%m/%d/%y") from contratos where hashInfy=?',
	connection.query(
		"select id,nome, sobrenome, rede_rank from dev_consultor where id=?",
		[req.params.id],

		function (error, result) {
			if (error) throw error;
			res.end(JSON.stringify(result));
		}
	);
};

// // Atualizando Registros
// exports.update = (req, res) => {
// 	connection.query(
// 		`Update dev_consultor SET rede_sec=id where rede_sec=null`,
// 		[
// 			req.body.id,
// 			req.body.rede_sec
// 		],
// 		function (error, result) {
// 			if (error) throw error();
// 			res.end(JSON.stringify(result));
// 		}
// 	);
// };

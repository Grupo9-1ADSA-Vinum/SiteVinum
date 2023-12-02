var database = require("../database/config");

function buscarPorId(id) {
  var query = `select * from distribuidora where id = '${id}'`;

  return database.executar(query);
}

function listar() {
  var query = `select * from distribuidora`;

  return database.executar(query);
}

function buscarPorCnpj(cnpj) {
  var query = `select * from distribuidora where cnpj = '${cnpj}'`;

  return database.executar(query);
}
// razaoSocial, cnpj, nomeFantasia, telefone, senha, email
function cadastrar(nomeFantasia,razaoSocial, cnpj , telefone, email, plano, senha) {
  var query = `insert into distribuidora (nomeFantasia, razaoSocial, CNPJ, telefone,  email, fkAssinaturas, senha) values ('${nomeFantasia}','${razaoSocial}', '${cnpj}','${telefone}','${email}', '${plano}','${senha}')`;

  return database.executar(query);
}

function autenticar(email, senha) {
  var instrucao = `
  select *
  from sensor
  join distribuidora on fkDistribuidora = idDistribuidora
  WHERE email = '${email}' AND senha = '${senha}';
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}
module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar, autenticar};

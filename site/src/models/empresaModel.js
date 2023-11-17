var database = require("../database/config");

function buscarPorId(id) {
  var query = `select * from distribuidora where id = '${id}'`;

  return database.executar(query);
}

function listar() {
  var query = `select * from distribuidora join assinaturas on fkAssinaturas = idAssinaturas`;

  return database.executar(query);
}

function buscarPorCnpj(cnpj) {
  var query = `select * from distribuidora where cnpj = '${cnpj}'`;

  return database.executar(query);
}
// razaoSocial, cnpj, nomeFantasia, telefone, senha, email
function cadastrar(razaoSocial, cnpj, nomeFantasia, telefone, senha, email, plano) {
  var query = `insert into distribuidora (razaoSocial, CNPJ, nomeFantasia, telefone, email, senha, fkAssinaturas) values ('${nomeFantasia}','${razaoSocial}', '${cnpj}','${telefone}','${senha}','${email}', '${plano}')`;

  return database.executar(query);
}

module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar };

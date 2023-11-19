var empresaModel = require("../models/empresaModel");

function buscarPorCnpj(req, res) {
  var cnpj = req.query.cnpj;

  empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  empresaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  empresaModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var cnpj = req.body.cnpjServer;
  var razaoSocial = req.body.razaoSocialServer;
  var nomeFantasia = req.body.nomeFantasiaServer;
  var telefone = req.body.telefoneServer;
  var senha = req.body.senhaServer;
  var email = req.body.emailServer;
  var plano = req.body.planoServer;


  empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a empresa com o cnpj ${cnpj} já existe` });
    } else {
      empresaModel.cadastrar(nomeFantasia, razaoSocial, cnpj, telefone, email, plano, senha).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

function autenticar(req, res) {
  var senha = req.body.senhaServer;
  var email = req.body.emailServer;
  

  if (email == undefined) {
    res.status(400).send("Seu email está indefinida!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está indefinida!");
  } else {

    empresaModel.autenticar(email, senha)
      .then(
        function (resultadoAutenticar) {
          console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
          console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

          if (resultadoAutenticar.length == 1) {
            console.log(resultadoAutenticar);

            empresaModel.autenticar(resultadoAutenticar[0].email, resultadoAutenticar[0].senha)
              .then((resultadoAutenticar) => {
                if (resultadoAutenticar.length == 0) {
                  res.status(400).send("Email e/ou senha inválido(s)")
                } else {
                  // res.json({
                  //   id: resultadoAutenticar[0].id,
                  //   email: resultadoAutenticar[0].email,
                  //   senha: resultadoAutenticar[0].senha,
                  // });
                  res.status(201).json(resultadoAutenticar);
                }
              })
          }
        }
      ).catch(
        function (erro) {
          console.log(erro);
          console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
          res.status(500).json(erro.sqlMessage);
        }
      );
  }

}

module.exports = {
  buscarPorCnpj,
  buscarPorId,
  cadastrar,
  listar,
  autenticar
};

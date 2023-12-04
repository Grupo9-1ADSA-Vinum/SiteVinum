var registroModel = require("../models/registroModel");

function buscarUltimosRegistros(req, res) {

    const limite_linhas = 7;

    var fkSensor = req.params.fkSensor;

    var fkDistribuidora= req.params.fkDistribuidora;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    registroModel.buscarUltimosRegistros(fkSensor, fkDistribuidora, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var fkSensor = req.params.fkSensor;
    var fkDistribuidora= req.params.fkDistribuidora;

    console.log(`Recuperando medidas em tempo real`);

    registroModel.buscarMedidasEmTempoReal(fkSensor, fkDistribuidora).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listar(req, res) {
    var fkDistribuidora = req.params.fkDistribuidora;

    registroModel.listar(fkDistribuidora).then((resultado) => {
      res.status(200).json(resultado);
    });
}

module.exports = {
    buscarUltimosRegistros,
    buscarMedidasEmTempoReal,
    listar
}
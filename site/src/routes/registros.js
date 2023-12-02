var express = require("express");
var router = express.Router();

var registroController = require("../controllers/registroController");

router.get("/ultimas/:fkSensor/:fkDistribuidora", function (req, res) {
    registroController.buscarUltimosRegistros(req, res);
});

router.get("/tempo-real/:fkSensor", function (req, res) {
    registroController.buscarMedidasEmTempoReal(req, res);
})

router.get("/listar/:fkDistribuidora", function (req, res) {
    registroController.listar(req, res);
});

module.exports = router;
var express = require("express");
var router = express.Router();

var planosController = require("../controllers/planosController");


router.get("/listar", function (req, res) {
  planosController.listar(req, res);
});


module.exports = router;
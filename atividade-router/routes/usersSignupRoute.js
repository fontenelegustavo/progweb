var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(
    `Acesso à rota '/users/signup ${req.requestTime}, acessar '/users/signin/:userid', com 'userid' sendo nome de usuário'`
  );
});

module.exports = router;

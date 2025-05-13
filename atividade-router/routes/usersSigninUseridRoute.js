var express = require("express");
var router = express.Router({mergeParams: true});

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(
    `Acesso à rota '/users/signin/${req.params.userid}' ${req.requestTime}, SEJA BEM-VINDO, ${req.params.userid}!`
  );
});

module.exports = router;

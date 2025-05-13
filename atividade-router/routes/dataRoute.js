var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(`Acesso à rota '/data' ${req.requestTime}`);
});

module.exports = router;

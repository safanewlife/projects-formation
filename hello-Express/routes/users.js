var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('{nom:café , prix:1000}');
});

module.exports = router;

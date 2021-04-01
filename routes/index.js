var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<h1>Weather</h1><h4>Check your city\'s weather today!</h4>');
});



module.exports = router;

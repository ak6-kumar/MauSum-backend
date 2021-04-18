var express = require('express');
var router = express.Router();
var axios = require('axios');
var auth = require('../middleware/auth');

/* GET home page. */
router.get('/',async function(req, res, next) {
  if(req.query.lat){
    const val = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${req.query.lat}&lon=${req.query.lon}&appid=1a1167b623267365e878fcea7af93f26&units=metric`)
      res.status(200).send(val.data);
  }
  else  res.status(404).send();
});



module.exports = router;

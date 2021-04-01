var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/',async function(req, res, next) {
  if(req.query.search){
    const val = await axios.get(`http://api.weatherstack.com/current?access_key=c6205ad123bbd7a82325989de6e38057&query=jammu`)
    res.send(val.data);
  }
});


module.exports = router;

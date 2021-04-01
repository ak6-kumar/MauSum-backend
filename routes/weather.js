var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/',async function(req, res, next) {
  // console.log(req.query.search);
  if(req.query.search){
  const val = await axios.get(`http://api.weatherstack.com/current?access_key=c6205ad123bbd7a82325989de6e38057&query=jammu`)
  res.send(val.data);
}
});
// ${req.query.search}

module.exports = router;

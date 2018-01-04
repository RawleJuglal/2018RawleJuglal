var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('build/vendor/index.html', { root: __dirname}, function(err){
  	if(err){
  		next(err);
  	}
  });
});

module.exports = router;

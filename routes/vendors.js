var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('/app/build/vendor/index.html', function(err){
  	if(err){
  		next(err);
  	}
  });
});

module.exports = router;

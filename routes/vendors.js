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

router.get('/bootstrapCSS', function(req, res, next){
  res.sendFile('/app/build/vendor/bootstrap/dist/css/bootstrap.min.css');
});

router.get('/bootstrapJS', function(req, res, next){
  res.sendFile('/app/build/vendor/bootstrap/dist/js/bootstrap.min.js');
});

router.get('/jquery', function(req, res, next){
  res.sendFile('/app/build/vendor/jquery/dist/jquery.slim.min.js');
});

router.get('/animate', function(req, res, next){
	res.sendFile('/app/build/vendor/animate/animate.min.css');
});

router.get('/scroll', function(req, res, next){
	res.sendFile('/app/build/vendor/scroll/angular-scroll.min.js');
});

router.get('/fontAwesome', function(req, res, next){
  res.sendFile('/app/build/vendor/fontAwesome/css/font-awesome.min.css');
});

module.exports = router;

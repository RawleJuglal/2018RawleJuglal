var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 res.json({message: 'You have reached the vendors'});
});

router.get('/bootstrapCSS', function(req, res, next) {
  var options = {
    root: '/build/vendor/bootstrap/dist/css',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent':true
    }
  };

  res.sendFile('bootstrap.min.css', options, function(err){
    if(err){
      next(err);
    }
  });
});

router.get('/jquery', function(req, res, next) {
  var options = {
    root: '/build/vendor/jquery/dist',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent':true
    }
  };

  res.sendFile('jquery.slim.min.js', options, function(err){
    if(err){
      next(err);
    }
  });
});

  router.get('/bootstrapJS', function(req, res, next) {
    var options = {
      root: '/build/vendor/bootstrap/dist/js',
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent':true
      }
    };

    res.sendFile('bootstrap.min.js', options, function(err){
      if(err){
        next(err);
      }
    });
  });

module.exports = router;
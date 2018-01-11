let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let FilmProject = mongoose.model('FilmProject');

router.param('film_id', function(req, res, next, id) {
	var query = FilmProject.findOne({_id:id});

	query.exec(function(err, film){
		if(err){return next(err)}
		if(!film){return next(new Error('can\'t find film'))}

		req.film = film;
		next();
	});
});

router.get('/', function(req, res, next) {
	res.json({message: 'You are in the film project api routes'});
});

router.get('/all', function(req, res, next) {
	FilmProject.find(function(err, films){
		if(err){return next(err);}
		res.json(films);
	});
});

router.post('/entry', function(req, res, next) {
	var project = new FilmProject(req.body);

	project.save(function(err, film) {
		if(err){return next(err);}
		res.json(film);
	});
});

router.route('/film/:film_id')
	.all(function(req, res, next) {
	  // runs for all HTTP verbs first
	  // think of it as route specific middleware!
	  next();
	})
	.get(function(req, res, next) {
	  res.json(req.film);
	})
	.put(function(req, res, next) {
	  // just an example of maybe updating the user
	  FilmProject.findByIdAndUpdate(req.params.film_id, req.body, {
	  	overwrite:true,
	  	new:true
	  }, (err, response) => {
	  	if(err){return next(err);}
	  	else{res.json(response)}
	  });
	})
	.post(function(req, res, next) {
	  next(new Error('not implemented'));
	})
	.delete(function(req, res, next) {
	  FilmProject.findByIdAndRemove(req.params.film_id, function(err, results) {
	  	if(err){console.log(err)}
	  	else{res.json(results)};	
	  });
	});


module.exports = router;
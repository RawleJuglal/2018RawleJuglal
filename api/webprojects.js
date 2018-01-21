let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let WebProject = mongoose.model('WebProject');

router.param('website_id', function(req, res, next, id) {
	var query = WebProject.findOne({_id:id});

	query.exec(function(err, website){
		if(err){return next(err)}
		if(!website){return next(new Error('can\'t find film'))}

		req.website = website;
		next();
	});
});

router.get('/', function(req, res, next) {
	res.json({message: 'You are in the web project api routes'});
});

router.get('/all', function(req, res, next) {
	WebProject.find(function(err, websites){
		if(err){return next(err);}
		res.json(websites);
	});
});

router.post('/entry', function(req, res, next) {
	console.log(req.body);
	var project = new WebProject(req.body);

	project.save(function(err, website) {
		if(err){return next(err);}
		res.json(website);
	});
});

router.route('/website/:website_id')
	.all(function(req, res, next) {
	  // runs for all HTTP verbs first
	  // think of it as route specific middleware!
	  next();
	})
	.get(function(req, res, next) {
	  res.json(req.website);
	})
	.put(function(req, res, next) {
		console.log(req.body);
	  // just an example of maybe updating the user
	  WebProject.findByIdAndUpdate(req.params.website_id, req.body, {
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
	  WebProject.findByIdAndRemove(req.params.website_id, function(err, results) {
	  	if(err){console.log(err)}
	  	else{res.json(results)};	
	  });
	});

module.exports = router;
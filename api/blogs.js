let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Blog = mongoose.model('Blog');

router.param('blog_id', function(req, res, next, id) {
	var query = Blog.findOne({_id:id}).populate('comments');

	query.exec(function(err, blog){
		if(err){return next(err)}
		if(!blog){return next(new Error('can\'t find film'))}

		req.blog = blog;
		next();
	});
});

router.get('/', function(req, res, next) {
	res.json({message: 'You are in the blog api routes'});
});

router.get('/all', function(req, res, next) {
	var query = Blog.find().populate('comments');

	query.exec(function(err, blogs){
		if(err){return next(err)}
		if(!blogs){return next(new Error('Can\'t find comment'))}

		res.json(blogs);
	})
});

router.post('/entry', function(req, res, next) {
	var blog = new Blog(req.body);

	blog.save(function(err, blog){
		if(err){return next(err);}
		res.json(blog);
	})
});

router.route('/blog/:blog_id')
	.all(function(req, res, next) {
	  // runs for all HTTP verbs first
	  // think of it as route specific middleware!
	  next();
	})
	.get(function(req, res, next) {
		res.json(req.blog);
	})
	.put(function(req, res, next) {
		Blog.findByIdAndUpdate(req.params.blog_id, req.body, {
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
		Blog.findByIdAndRemove(req.params.blog_id, function(err, results) {
			if(err){console.log(err)}
			else(res.json(results));
		});
	});

module.exports = router;
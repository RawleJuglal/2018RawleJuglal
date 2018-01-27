let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Blog = mongoose.model('Blog');
let Comment = mongoose.model('Comment');

router.param('blog_id', function(req, res, next, id) {
	var query = Blog.findOne({_id:id}).populate('comments');

	query.exec(function(err, blog){
		if(err){return next(err)}
		if(!blog){return next(new Error('can\'t find comment'))}

		req.blog = blog;
		next();
	})
})

router.param('comment_id', function(req, res, next, id) {
	var query = Comment.findOne({_id:id});
	query.exec(function(err, comment){
		if(err){return next(err)}
		if(!comment){return next(new Error('can\'t find comment'))}

		req.comment = comment;
		next();
	})
})

router.get('/', function(req, res, next) {
	res.json({message: 'You are in the comments api routes'})
});

router.post('/:blog_id/comment/entry', function(req, res, next){
	if(!req.body.comment){
		return res.status(400).json({message: 'Please fill out all fields'})
	}

	let comment = new Comment(req.body);
	comment.blog = req.params.blog_id;

	comment.save(function(err, newComment){
		if(err){return next(err);}
	});

	req.blog.comments.push(comment);
	req.blog.save(function(err, updatedBlog){
		if(err){return next(err);}
		res.json(updatedBlog);
	});
});

router.get('/:blog_id/all', function(req, res, next){
	res.json(req.blog.comments);
});

router.route('/:blog_id/comment/:comment_id')
	.all(function(req, res, next){
		next();
	})
	.get(function(req, res, next){
		res.json(req.comment);
	})
	.put(function(req, res, next){
		next(new Error('not implemented'));
	})
	.post(function(req, res, next){
		next(new Error('not implemented'));
	})
	.delete(function(req, res, next){
		console.log(req.data);
		Comment.findByIdAndRemove(req.params.comment_id, function(err, results){
			if(err){return next(err);}
			console.log(results);
		});

		Blog.findByIdAndUpdate(req.params.blog_id, req.data, {
			overwrite:true,
			new:true
		}, (err, response) => {
			if(err){return next(err);}
			else{res.json(response)}
		})
	});

module.exports = router;
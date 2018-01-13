let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let jwt = require('express-jwt');

let User = mongoose.model('User');

var auth = jwt({secret: 'R3l3ntl3$$', userProperty: 'payload'});

router.get('/', function(req, res, next) {
	res.json({message: 'You are in the users api routes'});
});

router.post('/register', function(req, res, next){
	if(!req.body.username || !req.body.password){
		return res.status(400).json({success:false, message:'Please fill out all fields'});
	}

	var user = new User();
	user.username = req.body.username;
	user.setPassword(req.body.password);

	user.save(function(err, user){
		if(err){return next(err);}

		return res.json({success:true, message:'New User Created', token:user.generateJWT()});
	});
});

router.post('/login', function(req, res, next){
	if(!req.body.username || !req.body.password){
		return res.status(400).json({success:false, message:'Please fill out all fields'});
	}

	passport.authenticate('local', function(err, user, info){
		if(err){return next(err);}
		if(user){

			return res.json({success:true, message:'This user is authenticated', token:user.generateJWT()});
		} else {
			return res.status(400).send(info);
		}
	})(req, res, next);
});

module.exports = router;
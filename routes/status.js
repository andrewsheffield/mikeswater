var express = require('express');
var router = express.Router();
var User = require('../models/user.js');

/* Push new status */
router.put('/', function(req, res, next) {

	var email = "Test@mikeswater.com";
  
	var newStatus = {
		temp: req.body.temp,
		pressure: req.body.pressure,
		timestamp: Date.now(),
		shutoffvalve: req.body.shutoffvalve
	}

	User.findOne({email: email}, function(err, user) {
		if (err) return res.json(err);
		if (!user) return res.json({message: "No user found"});
		else {
			user.status.push(newStatus);
			user.save(function(err, user) {
				if(err) return res.json(err);
				else return res.json(user);
			});
		}
	});

});

module.exports = router;

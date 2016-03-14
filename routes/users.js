var express = require('express');
var router = express.Router();
var User = require('../models/user.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, function(err, users) {
  	if (err) return res.json(err);
  	else return res.json(users);
  });
});

/* Create a new user */
router.post('/', function(req, res, next) {

	var newUser = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: "Test@mikeswater.com"
	});

	newUser.save(function(err, data) {
		if (err) return res.json(err);
		else return res.json(data);
	});

});

module.exports = router;

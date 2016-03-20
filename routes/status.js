var express = require('express');
var router = express.Router();
var Status = require('../models/status.js');

/* Add a status update for a product */
router.post('/', function(req, res, next) {

	var new_status = new Status(req.body);

	new_status.save(function(err, status) {
		if (err) return res.json(err);
		else return res.json(status);
	});

});

module.exports = router;
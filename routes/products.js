var express = require('express');
var router = express.Router();
var Product = require('../models/product.js');

/* GET product listing. */
router.get('/', function(req, res, next) {
  Product.find({}, function(err, products) {
  	if (err) return res.json(err);
  	else if (products.length <= 0) return res.json({message: "No products connected yet"});
  	else return res.json(products);
  });
});

/* Create a new product in the database */
router.post('/', function(req, res, next) {

	var new_product = new Product({
		hardware_id: req.body.hardware_id,
		description: req.body.description,
	});

	new_product.save(function(err, data) {
		if (err) return res.json(err);
		else return res.json(data);
	});

});

module.exports = router;

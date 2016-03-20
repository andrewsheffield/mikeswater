var express = require('express');
var router = express.Router();
var Product = require('../models/product.js');

/* GET home page. */
router.get('/', function(req, res, next) {

	Product.find({}, function(err, products) {
  	if (err) return res.json(err);
  	else if (products.length <= 0) return res.json({message: "No products connected yet"});
  	else return res.json(products);
  });

});

module.exports = router;

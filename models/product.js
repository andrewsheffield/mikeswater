var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	hardware_id: Number,
	description: String,
	creation_timestamp: {type: Date, default: Date.now},
	settings: {
		shutoff_valve: {type: Boolean, default: false},
		board_led: {type: Boolean, default: false}
	}
});

var Product = mongoose.model('product', productSchema);

module.exports = Product;
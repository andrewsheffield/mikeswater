var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var statusSchema = new Schema({
	hardware_id: Number,
	temp: Number,
	pressure: Number,
	timestamp: Date,
	shutoff_valve: Boolean,
	board_led: Boolean
});

var Status = mongoose.model('status', statusSchema);

module.exports = Status;
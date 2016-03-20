var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var statusSchema = new Schema({
	hardware_id: { type: Number, index: true },
	temp: Number,
	pressure: Number,
	timestamp: { type: Date, index: true },
	shutoff_valve: Boolean,
	board_led: Boolean
});

var Status = mongoose.model('status', statusSchema);

module.exports = Status;
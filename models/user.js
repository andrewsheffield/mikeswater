var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    hashedPassword: String,
    devices: [{
    	microID: Number,
    	description: String
    }],
    creationTimestamp: {
    	type: Date,
    	default: Date.now
    },
    activated: {
    	type: Boolean,
    	default: true
    },
    loginTimestamps: [Date],
    status: [{
    	temp: Number,
    	pressure: Number,
    	timestamp: Date,
    	shutoffvalve: Boolean
    }],
    settings: {
    	shutoffvalve: {
    		type: Boolean,
    		default: false
    	}
    }
});

var User = mongoose.model('users', userSchema);

module.exports = User;
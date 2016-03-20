var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    hashedPassword: String,
    devices: [{
    	microID: Number,
    	description: String,
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
    }],
    creationTimestamp: {
    	type: Date,
    	default: Date.now
    },
    activated: {
    	type: Boolean,
    	default: true
    },
    loginTimestamps: [Date]
});

var User = mongoose.model('users', userSchema);

module.exports = User;
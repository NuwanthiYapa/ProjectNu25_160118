let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {
	console.log("Event triggered ", event);

	callback(null,'Successfully executed');
}
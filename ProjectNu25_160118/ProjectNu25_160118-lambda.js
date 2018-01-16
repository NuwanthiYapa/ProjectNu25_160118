let AWS = require('aws-sdk');
let connectionManager = require('./ConnectionManager');
let SL = require('slappforge-aws');
const rds = new SL.AWS.RDS(connectionManager);
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
	console.log("Event triggered ", event);

	// Replace the query with the actual query
	// You can pass the existing connection to this function.
	// A new connection will be creted if it's not present as the third param 
	rds.query({
		identifier: 'nuwanthi',
		query: 'CREATE TABLE Persons (PersonID int, LastName varchar(255),FirstName varchar(255));',
		transactional: false
	}, function (error, results, connection) {
		if (error) {
			console.log("Error occurred");
			throw error;
		} else {
			console.log("Success")
			console.log(results);
		}

		connection.end();
	});


	// ddb.put({
	// 	TableName: 'nu_table',
	// 	Item: { 'id': 1, 'name': 'nuwanthi' }
	// }, function (err, data) {
	// 	if (err) {
	// 		//handle error
	// 	} else {
	// 		//your logic goes here
	// 	}
	// });

	callback(null, 'Successfully executed');
}
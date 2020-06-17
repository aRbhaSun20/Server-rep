console.log(`connected to database`);
const mongo = require("mongodb");

const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";
console.log('connected')
class DataBase {
	writeData = (data) => {
		const MongoClient = mongo.MongoClient;
		console.log("connected" + data);
		// Database Name
		const dbName = "Login";

		MongoClient.connect(url, function (err, client) {
			assert.equal(null, err);
			console.log("Connected successfully to server"); // db created

			const db = client.db(dbName);

			db.collection("LoginRecords").insertOne(data, (err, res) => {
				if (err) {
					throw err;
				}
				console.log("inserted");
				client.close();
			});
		});
	};
}

module.exports = DataBase;

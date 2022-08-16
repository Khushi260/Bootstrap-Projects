const MongoClient = require('Mongodb').MongoClient;
const assert = require('assert');

//connection url
const url = "mongodb://localhost:27017";

//Database name
const dbname = 'fruitDB';

//Create anew mongoclient
const client = new MongoClient(url);


//Use connect to method to connect to the Server
client.connect(function (err) {

    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbname);

    insertDocuments(db, function () {
        client.close();
    });
});

const insertDocuments = function (db, callback) {
    //get the documents collection
    const collection = db.collection('fruits');

    //insert some documents
    collection.insertMany([
        {
            name: "Apple",
            score: 8,
            review: "Great fruit"
        },
        {
            name: "Orange",
            score: 6,
            review: "kinda sour"
        },
        {
            name: "Banana",
            score: 9,
            review: "Healthy fruit"
        }
    ], function (err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documnets into the collections");
        callback(result);
    }
    );
}
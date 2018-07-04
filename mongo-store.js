const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/';
const dbName = 'summonerz';


MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  
  const db = client.db(dbName);
  
  insertDocuments(db, function() {
    client.close();
  });
});

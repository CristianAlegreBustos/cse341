const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const uri = process.env.MONGO_URI;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
.then(client => {
    console.log('Connected!');
    _db = client.db();
    callback();
})
.catch(err => {
    console.log(err);
    throw err;
});
};
const getDb = () => {
  if (_db) {
    console.log(_db)
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

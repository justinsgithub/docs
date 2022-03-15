const { MongoClient } = require('mongodb');

let client;

exports.initializeDbConnection = async () => {
    client = await MongoClient.connect('mongodb://localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

exports.getDbConnection = dbName => {
    const db = client.db(dbName);
    return db;
}

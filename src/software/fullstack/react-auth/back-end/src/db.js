import { MongoClient } from 'mongodb';

let client;

export const initializeDbConnection = async () => {
    client = await MongoClient.connect('mongodb://localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log("connected to mongodb")
}

export const getDbConnection = dbName => {
    const db = client.db(dbName);
    return db;
}

const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'root';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);

  // Find a document in the "architects" collection
  const collection = db.collection('architects');
  const document = await collection.findOne({});
  console.log('Found document:', document);

  // Close the connection
  await client.close();
}

main().catch(console.error);
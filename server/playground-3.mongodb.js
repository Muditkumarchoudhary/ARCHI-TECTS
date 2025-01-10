const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myNewDatabase';

// Simple hash function for demonstration purposes
function hashPassword(password) {
  // In a real application, use a secure hashing algorithm like bcrypt
  return password.split('').reverse().join(''); // Simple reverse for demonstration
}

async function run() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    const collection = db.collection('Vendor-details');

    // Insert a document into the Vendor-details collection with a hashed password
    const insertResult = await collection.insertOne({
      firstName: 'John',
      lastName: 'Doe',
      dob: '1990-01-01',
      age: 31,
      shopName: "John's Shop",
      gstin: '1234567890',
      email: 'john.doe@example.com',
      phone: '1234567890',
      country: 'USA',
      aadhaar: '123456789012',
      password: hashPassword('plainpassword'), // Hash the password before storing
      profilePhoto: 'profilephoto.jpg'
    });
    console.log('Inserted document:', insertResult.insertedId);

    // Find a document in the Vendor-details collection
    const vendor = await collection.findOne({ email: 'john.doe@example.com' });
    console.log('Found document:', vendor);
  } finally {
    // Close the connection to the MongoDB server
    await client.close();
  }
}

run().catch(console.dir);
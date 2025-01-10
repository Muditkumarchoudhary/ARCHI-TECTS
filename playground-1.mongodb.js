/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'myNewDatabase';
const collection = 'Userdetails';

// Switch to the database.
use(database);

// Query the collection to get user data.
const users = db[collection].find().toArray();

// Print the user data to the console.
printjson(users);

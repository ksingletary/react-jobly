"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");

let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "postgresql:///jobly_test";
} else {
  DB_URI = "postgresql:///jobly";
}
const db = new Client({
  connectionString: DB_URI
});

db.connect()
  .then(() => console.log("Connected to the database"))
  .catch(err => {
    console.error("Error connecting to the database:", err.message);
    process.exit(1); // Exit the process if unable to connect to the database
  });

module.exports = db;

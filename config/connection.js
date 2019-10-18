// Set up MySQL connection.
var mysql = require("mysql");
require("dotenv").config();

var connection = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE || "burgers_db"
});

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
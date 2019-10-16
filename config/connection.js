var mysql = require("mysql");

var connection=myql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Lolafitz",
    database: "burgers_db"
})

connection.connect(function(err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


module.exports = connection;
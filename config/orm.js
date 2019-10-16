  var connection = require("../config/connection.js");
  
  var orm = {
    //SELECT * FROM burgers;

    selectAll: function (whatToSelect, tableInput)  {
      var queryString = "SELECT ?? FROM ??"
      connection.query(queryString, [whatToSelect, tableInput], function(err, result){
        if (err) throw err;
        console.log(result);
      });

    },
  
    // "INSERT INTO burgers (burgers_name, devoured) VALUES(name, false)"

    insertOne: function (tableInput, colName, colName, colVal, colVal) {
      var queryString = "INSERT INTO ?? (??, ??) VALUES(?, ?)"
      connection.query(queryString, [], function(err, result){
        if (err) throw err;
        console.log(result)
      })
    },

     // UPDATE `table_name` SET `column_name` = `new_value' [WHERE condition];

    updateOne: function (tableInput, column_name, columnVal, column_name, columnVal){
      var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?"
      connection.query(queryString, [tableInput, column_name, columnVal, column_name, columnVal], function(err, result){
        if (err) throw err;
        console.log(result)
      })
    }


  }
  

module.exports = orm;
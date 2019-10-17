  var connection = require("./connection.js");
  
  var orm = {
    //SELECT * FROM burgers;

    selectAll: function (tableInput, cb)  {
      var queryString = "SELECT * FROM ??"
      connection.query(queryString, [tableInput], function(err, result){
        if (err) throw err;
        console.log(result);
      });

    },
  
    // "INSERT INTO burgers (burgers_name, devoured) VALUES(name, false)"

    insertOne: function (table, colName, colName, condition, colVal) {
      var queryString = "INSERT INTO ?? (??, ??) VALUES(?, ?)"
      connection.query(queryString, [], function(err, result){
        if (err) throw err;
        console.log(result)
      })
    },

     // UPDATE `table_name` SET `column_name` = `new_value' [WHERE condition];
     // UPDATE burgers SET devoured = false WHERE id = 1;

    updateOne: function (tableInput, column_name, columnVal, column_name, columnVal){
      var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?"
      connection.query(queryString, [tableInput, column_name, columnVal, column_name, columnVal], function(err, result){
        if (err) throw err;
        console.log(result)
      })
    }


  }
  

module.exports = orm;
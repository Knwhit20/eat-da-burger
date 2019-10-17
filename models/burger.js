
// call ORM functions
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectALL: function (cb) {
        orm.select("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
};


module.exports = burger;
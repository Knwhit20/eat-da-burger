var orm = require("orm");

var burger = {

    all: function(){
        orm.all("burgers", function(res){
            callback(res);
        });
    },

    //create burger
    create: function(){
        orm.create("burgers", cols)
    }


    //update burger


    //delete burger






}
// call ORM functions





module.exports = burger;
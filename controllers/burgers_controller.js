var express = require("express");
var router = express.Router()

var burger = require("../models/burger.js");

router.get("/burgers", function (req, res){
    burger.select(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject)
        res.render("index", hbsObject);
    });
});


router.post("/burgers/create", function (req, res){
    burger.create(["burger", "devoured"], 
    [req.body.name, req.body.devoured],
    function(result) {
        res.json({ id: result.insertID})
    });
});



router.put("burgers/update/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition, condition");

})



router.delete("/api/burgers/:id", function (req, res){

})

module.exports = router;
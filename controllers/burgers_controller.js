var express = require("express");
var router = express.Router()

var burger = require("../models/burger.js");

router.get("/", function (req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject)
        res.render("index", hbsObject);
    });
});


router.post("/api/burgers", function (req, res){
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured],function(result) {
        res.json({ id: result.insertID})
    });
});



router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    burger.update(req.body, condition, function(result) {
        res.send(200);
    })
   
    
})


module.exports = router;
$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#newburger").val(),
            devoured: 0
        }


        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("added new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });



    $(".eatburger").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        console.log("string")
        event.preventDefault();
        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function () {
                console.log("Burger Devoured");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    })
});

$(function () {
    $(".create-form").on("submit", function (event) {
       event.preventDefault();
       var newBurger = {
            burger_name: $("newburger").val().trim(),
            devoured:0
       }
        });

        // Send the POST request.
        $.ajax("/burgers" + {
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
        event.preventDefault();
        var id= $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/burgers", id, {
            type: "PUT",
            data: devouredState
        }).then(
            function () {
                console.log("Burger Devoured");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

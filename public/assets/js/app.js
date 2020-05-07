// Sending PUT Request
function devourBurger(id) {
    $.ajax("/api/burger/" + id, {
        type: "PUT"
    }).then(
        function () {
            location.reload();
        }
    );
}

$(".devour-btn").on("click", function () {
    let id = $(this).attr("data-burger");
    devourBurger(id);
});

$("#addBurger").on("submit", function (event) {
    event.preventDefault();
    const data = {
        name: $("#burgerName").val()
    };
    // Sending POST Request
    $.ajax("/api/burger", {
        type: "POST",
        data: data
    }).then(
        function () {
            location.reload();
        }
    );
});
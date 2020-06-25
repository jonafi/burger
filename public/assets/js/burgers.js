$(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = { 
      name:$("#newBurger").val().trim()
    };

    console.log(newBurger);

    $.ajax("/api/add-burger", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        location.reload();
      }
    );
  });
});

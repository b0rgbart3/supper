
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-eaten").on("click", function(event) {
    var id = $(this).data("id");
    var newEaten = $(this).data("neweaten");

    var newEatenState = {
      eaten: newEaten
    };

    // Send the PUT request.
    $.ajax("/api/meals/" + id, {
      type: "PUT",
      data: newEatenState
    }).then(
      function() {
        console.log("changed eaten to", newEaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

  
    var newMeal = {
      title: $("#meal_title").val().trim(),
      eaten: $("[name=eaten]:checked").val().trim()
    };

    console.log('submitting....' + JSON.stringify(newMeal));
    // Send the POST request.
    $.ajax("/api/meals", {
      type: "POST",
      data: newMeal
    }).then(
      function() {
        console.log("created new meal");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

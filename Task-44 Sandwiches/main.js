"use strict";
function make_sandwich(...items) {
    console.log("Making a sandwich with:", ...items);
}
make_sandwich("avocado", "sprouts", "mustard", "mayo.");
make_sandwich("ham", "cheese");
make_sandwich("tomato", "lettuce", "turkey");

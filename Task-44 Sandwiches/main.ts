function make_sandwich(...items: string[]) {
  console.log("Making a sandwich with:", ...items);
}

make_sandwich("avocado", "sprouts", "mustard", "mayo.");
make_sandwich("ham", "cheese");
make_sandwich("tomato", "lettuce", "turkey");
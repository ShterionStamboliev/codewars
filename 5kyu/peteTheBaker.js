function cakes(recipe, available) {

 return Math.min(
    ...Object.keys(recipe)
    .map(ingredient => Math.floor(available[ingredient] / recipe[ingredient] || 0)));
}
cakes(
  { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
  { sugar: 500, flour: 2000, milk: 2000 }
);

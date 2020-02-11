const db = require('./database');
const Recipe = require('./recipe');
const Ingredient = require('./ingredient');

Recipe.hasMany(Ingredient);
Ingredient.belongsTo(Recipe);

module.exports = {
  db,
  Recipe,
  Ingredient,
};

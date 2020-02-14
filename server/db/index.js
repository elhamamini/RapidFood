const db = require('./database');
const Recipe = require('./recipe');
const Ingredient = require('./ingredient');
const User = require('./user');
const Favorite = require('./favorits');

Recipe.hasMany(Ingredient);
Ingredient.belongsTo(Recipe);
User.hasMany(Favorite);
Favorite.belongsTo(User);

module.exports = {
  db,
  Recipe,
  Ingredient,
  User,
  Favorite,
};

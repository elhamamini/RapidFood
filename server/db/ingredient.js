const Sequelize = require('sequelize');
const db = require('./database');

const { STRING, INTEGER, TEXT, DECIMAL } = Sequelize;
const Ingredient = db.define('ingredients', {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  original: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  amount: {
    type: DECIMAL,
    allowNull: false,
  },
});
module.exports = Ingredient;

const Sequelize = require('sequelize');
const db = require('./database');
const { STRING, ENUM, DECIMAL, DATE, UUID, UUIDV4, INTEGER, TEXT } = Sequelize;
const Recipe = db.define('recipes', {
  foodId: {
    type: INTEGER,
    allowNull: false,
  },
  imageUrl: {
    type: TEXT,
    defaultValue:
      'https://ayc.ddl.mybluehost.me/wp-content/uploads/2018/04/coming-soon.png',
    validate: {
      isUrl: true,
    },
  },
  title: {
    type: STRING,
    allowNull: false,
  },
});
module.exports = Recipe;

const Sequelize = require('sequelize');
const db = require('./database');
const { STRING, INTEGER, TEXT } = Sequelize;
const Favorite = db.define('favorits', {
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  image: {
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
module.exports = Favorite;

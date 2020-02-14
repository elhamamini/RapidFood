const Sequelize = require('sequelize');
const db = require('./database');
const {
  STRING,
  ENUM,
  DECIMAL,
  DATE,
  UUID,
  UUIDV4,
  INTEGER,
  TEXT,
  ARRAY,
} = Sequelize;
const User = db.define('users', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: STRING,
    allowNull: false,
    defaultValue: 'guestEmail@gmail.com',
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  password: {
    type: STRING,
    allowNull: false,
    defaultValue: 'guestPwd',
    validate: {
      notEmpty: true,
    },
  },
  recipeId: {
    type: ARRAY(INTEGER),
    defaultValue: [],
  },
});
module.exports = User;

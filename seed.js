const { green, red } = require('chalk');
const { db, User } = require('./server/db/index');
const userList = [
  { name: 'elham', email: 'elhamfarvid@gmail.com', password: 'abcde' },
  { name: 'joe', email: 'joea@gmail.com', password: 'abcde' },
  { name: 'ryan', email: 'ryan@gmail.com', password: 'abcde' },
];
const seed = async () => {
  try {
    await db.sync({ force: true });
    await User.bulkCreate(userList);
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;

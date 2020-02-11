const express = require('express');
const path = require('path');
const chalk = require('chalk');
const axios = require('axios');
const { Recipe } = require('./db/index');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(chalk.cyan(`${new Date().toString()}: ${req.path}`));
  next();
});
// app.get('/api/recipes', (req, res, next) => {
//   const YOURAPIKEY = 'af623f325e5a4d308b199b64899c3b9b';
//   //   const { indegrints } = req.body;
//   axios
//     .get(
//       `https://api.spoonacular.com/recipes/findByIngredients?ingredients=bananas,+flour,+sugar&number=2&apiKey=${YOURAPIKEY}`
//     )
//     .then(resp => {
//       console.log('recipeeeeee', resp.data);
//       res.send(resp.data[0]);
//     })
//     .catch(e => {
//       console.error(e);
//     });
// });
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', require('./api'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.use((err, req, res, next) => {
  // this is for testing; so if we don't have tests we can remove it
  if (process.env.NODE_ENV !== 'test') console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
  next();
});

module.exports = app;

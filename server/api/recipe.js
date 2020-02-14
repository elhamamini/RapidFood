const router = require('express').Router();
const axios = require('axios');
const { Recipe } = require('../db/index');
const YOURAPIKEY = 'af623f325e5a4d308b199b64899c3b9b';
const YOURAPIKEY1 = '4eb2324500044e01a12fb1404ab51713';
router.get('/', (req, res, next) => {
  axios
    .get(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=bananas,+flour,+sugar&number=2&apiKey=${YOURAPIKEY1}`
    )
    .then(resp => {
      res.send(resp.data[0]);
    })
    .catch(e => {
      console.error(e);
    });
});
router.post('/', (req, res, next) => {
  const listOfIngredients = Object.keys(req.body).filter(
    indig => req.body[indig]
  );

  let listStr = '';

  for (let i = 0; i < listOfIngredients.length; i++) {
    if (i !== 0) {
      listStr += ',+';
    }
    listStr += listOfIngredients[i];
  }

  axios
    .get(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${listStr}&number=2&apiKey=${YOURAPIKEY1}&ranking=1&includeInstruction=true`
    )
    .then(recipe => {
      res.send(recipe.data);
    })
    .catch(e => console.error(e));
});
module.exports = router;

const router = require('express').Router();
const axios = require('axios');
const { Recipe } = require('../db/index');
const YOURAPIKEY = 'af623f325e5a4d308b199b64899c3b9b';
router.get('/', (req, res, next) => {
  axios
    .get(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=bananas,+flour,+sugar&number=2&apiKey=${YOURAPIKEY}`
    )
    .then(resp => {
      console.log('recipeeeeee', resp.data);
      res.send(resp.data[0]);
    })
    .catch(e => {
      console.error(e);
    });
});
router.post('/', (req, res, next) => {
  const listOfIngredients = Object.keys(req.body);
  let listStr=listOfIngredients.slice(0,1)
  for(let i=1;i<listOfIngredients.slice(1).length;i++){

      if(listOfIngredients.length!==i){
          listStr+=','
      }
      listStr=
  }
  console.log('list', listOfIngredients);
  axios
    .get(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${bananas,+flour,+sugar}&number=2&apiKey=${YOURAPIKEY}`
    )
});
module.exports = router;
// ?apiKey=YOUR-API-KEY

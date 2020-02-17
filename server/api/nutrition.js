const router = require('express').Router();
const axios = require('axios');
const YOURAPIKEY = 'af623f325e5a4d308b199b64899c3b9b';
const YOURAPIKEY1 = '4eb2324500044e01a12fb1404ab51713';
router.post('/', (req, res, next) => {
  const { id } = req.body;
  const newId = Number(id);
  axios
    .get(
      `https://api.spoonacular.com/recipes/${newId}/information?includeNutrition=true&apiKey=${YOURAPIKEY}`
    )
    .then(nutrition => {
      res.status(201).send(nutrition.data);
    })
    .catch(e => {
      console.error(e.message);
      next(e);
    });
});
module.exports = router;

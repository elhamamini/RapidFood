const router = require('express').Router();
const axios = require('axios');
const YOURAPIKEY = 'af623f325e5a4d308b199b64899c3b9b';
const YOURAPIKEY1 = '4eb2324500044e01a12fb1404ab51713';
router.get('/', (req, res, next) => {
  axios
    .get(
      `https://api.spoonacular.com/recipes/716429/information?includeInstruction=true&apiKey=${YOURAPIKEY1}`
    )
    .then(resp => {
      res.send(resp.data);
    })
    .catch(e => {
      console.error(e);
    });
});
// router.post('/', (req, res, next) => {
//   console.log('bodyyyyy$$$$$', req.body);
//   const { id } = req.body;

//   const newId = Number(id);
//   axios
//     .get(
//       `https://api.spoonacular.com/recipes/${newId}/information?includeInstruction=true&apiKey=${YOURAPIKEY1}`
//     )
//     .then(recipe => {
//       res.status(201).send(recipe.data);
//     })
//     .catch(e => {
//       console.error(e.message);
//       next(e);
//     });
// });
router.get('/:id', (req, res, next) => {
  // console.log('bodyyyyy$$$$$', req.body);
  // const { id } = req.body;
  console.log('iddd$$$$', req.params);
  const newId = Number(req.params.id);
  axios
    .get(
      `https://api.spoonacular.com/recipes/${newId}/information?includeInstruction=true&apiKey=${YOURAPIKEY1}`
    )
    .then(recipe => {
      console.log('recipe server', recipe.data);
      res.status(201).send(recipe.data);
    })
    .catch(e => {
      console.error(e.message);
      next(e);
    });
});
module.exports = router;

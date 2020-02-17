const router = require('express').Router();
router.use('/recipes', require('./recipe.js'));
router.use('/instructions', require('./instructions.js'));
router.use('/users', require('./user.js'));
router.use('/fav', require('./favorite.js'));
router.use('/nutritions', require('./nutrition.js'));
router.use('*', (req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;

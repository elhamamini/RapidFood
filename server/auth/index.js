const router = require('express').Router();
const { User } = require('../db/index');
router.post('/login', (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email,
      password: req.body.password,
    },
  })
    .then(userOrNull => {
      if (!userOrNull) return res.sendStatus(401);
      req.session.userId = userOrNull.id;
      res.status(200).send(userOrNull);
    })
    .catch(next);
});
router.post('/signup', (req, res, next) => {
  User.findOrCreate({
    where: req.body,
  })
    .then(user => {
      if (!user) return res.status(500).send('error creating user');
      req.session.userId = user.id;
      res.send(user);
    })
    .catch(next);
});
router.get('/signout', (req, res, next) => {
  delete req.session.userId;
  res.sendStatus(204);
  next();
});
router.get('/me', (req, res, next) => {
  if (req.loggedIn) return res.send(req.user);
  // res.status(401).send('no prior login!');
  res.status(401);
  const err = new Error('Not logged in');
  console.error(err);
  next();
});

module.exports = router;

const router = require('express').Router();
const { User, Favorite } = require('../db/index');

router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => {
      res.status(200).send(users);
    })
    .catch(e => {
      console.error(e);
      next(e);
    });
});

router.get('/:id', (req, res, next) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
    include: [{ model: Favorite }],
  })
    .then(userOrNull => {
      if (userOrNull) res.status(200).send(userOrNull);
      else {
        res.status(404).send('there is no user with that id');
      }
    })
    .catch(e => {
      console.error(e);
      next(e);
    });
});

router.post('/', (req, res, next) => {
  User.create(req.body)
    .then(createdUser => {
      res.status(201).send(createdUser);
    })
    .catch(e => {
      console.error(e);
      next(e);
    });
});

router.put('/:id', (req, res, next) => {
  console.log('idddd', req.params.id);
  User.findByPk(req.params.id)
    .then(userOrNull => {
      if (!userOrNull) {
        return res.sendStatus(404);
      }
      // this is a hack
      console.log('incoming recipe id', req.body.recipeId);
      userOrNull.recipeId = req.body.recipeId;
      //   return userOrNull.update({ recipeId: userOrNull.recipeId });
      return userOrNull.update({ recipeId: req.body.recipeId });
    })
    .then(updatedUser => {
      console.log('userrrrrOrNullll', updatedUser);
      return res.status(202).send(updatedUser);
    })
    .catch(e => {
      console.error(e);
      next(e);
    });
});

router.delete('/:id', (req, res, next) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(data => {
      if (data) return res.sendStatus(204);
      res.sendStatus(404);
    })
    .catch(e => {
      console.error(e);
      next(e);
    });
});

module.exports = router;

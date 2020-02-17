const router = require('express').Router();
const { Favorite } = require('../db/index');

router.get('/', (req, res, next) => {
  Favorite.findAll()
    .then(fav => {
      return res.status(200).send(fav);
    })
    .catch(e => {
      console.error(e);
      next(e);
    });
});

router.get('/:id', (req, res, next) => {
  Favorite.findByPk(req.params.id)
    .then(favOrNull => {
      if (favOrNull) res.status(200).send(favOrNull);
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
  Favorite.create(req.body)
    .then(createdFav => {
      res.status(201).send(createdFav);
    })
    .catch(e => {
      console.error(e);
      next(e);
    });
});

router.put('/:id', (req, res, next) => {
  Favorite.findByPk(req.params.id)
    .then(favOrNull => {
      if (favOrNull) {
        favOrNull.update(req.body);
        return res.status(202).send(favOrNull);
      }
      res.status(404);
    })
    .catch(e => {
      console.error(e);
      next(e);
    });
});

router.delete('/:id', (req, res, next) => {
  Favorite.destroy({
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

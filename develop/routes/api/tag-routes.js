const router = require('express').Router();
const { Tag, Product } = require('../../models');

router.get('/', (req, res) => {
  Tag.findAll({
    include: [{ model: Product }],
  })
    .then((tags) => res.json(tags))
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id, {
    include: [{ model: Product }],
  })
    .then((tag) => {
      if (!tag) {
        res.status(404).json({ message: 'No tag found with this id!' });
        return;
      }
      res.json(tag);
    })
    .catch((err) => res.status(500).json(err));
});

router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((tag) => res.status(201).json(tag))
    .catch((err) => res.status(400).json(err));
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((rowsUpdated) => {
      if (rowsUpdated[0] === 0) {
        res.status(404).json({ message: 'No tag found with this id!' });
        return;
      }
      res.json({ message: 'Tag updated successfully!' });
    })
    .catch((err) => res.status(400).json(err));
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((rowsDeleted) => {
      if (rowsDeleted === 0) {
        res.status(404).json({ message: 'No tag found with this id!' });
        return;
      }
      res.json({ message: 'Tag deleted successfully!' });
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
const router = require('express').Router();
const { getProductTags } = require('../../global');
// const { Tag, Product, ProductTag } = require('../../models');

// The `/api/product-tags` endpoint

router.get('/', (req, res) => getProductTags(req, res));

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
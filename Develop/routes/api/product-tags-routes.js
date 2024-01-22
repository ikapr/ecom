const router = require('express').Router();
const { ProductTag } = require('../../models');
const { getProductTags } = require('../../global');

// The `/api/product-tags` endpoint

router.get('/', (req, res) => getProductTags(req, res));

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const newProductTag = await ProductTag.create(req.body);
    res.status(201).json({ message: `Successfully Created Prduct Tag`, newProductTag });
  } catch (error) {
    let errorMessage = `Error Creating New Product Tag`;
    let errorParams = { error, dataToInsert: req.body, response: res, errorMessage };
    console.log(errorMessage, errorParams);
    res.status(400).json(errorParams);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
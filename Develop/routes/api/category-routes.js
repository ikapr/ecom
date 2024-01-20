const router = require('express').Router();
const { getCategories, getCategoryById } = require('../../global');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => getCategories(req, res));

router.get('/:id', (req, res) => getCategoryById(req, res));

router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json({ message: `Successfully Created Category`, newCategory });
  } catch (error) {
    let errorMessage = `Error Creating New Category`;
    let errorParams = { error, dataToInsert: req.body, response: res, errorMessage };
    console.log(errorMessage, errorParams);
    res.status(400).json(errorParams);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
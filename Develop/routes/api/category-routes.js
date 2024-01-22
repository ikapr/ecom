const router = require('express').Router();
const { Category } = require('../../models');
const { getCategories, getCategoryById } = require('../../global');

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

router.put('/:id', async (req, res) => {
  try {
    const categoryID = req.params.id;
    const updatedCategory = await Category.update(req.body, {
      where: { id: categoryID }
    })
    console.log(`Successfully Updated Category`, updatedCategory);
    res.status(200).json({ message: `Successfully Updated Category` });
  } catch (error) {
    let errorMessage = `Error Updating Category`;
    let errorParams = { error, dataToInsert: req.body, response: res, errorMessage };
    console.log(errorMessage, errorParams);
    res.status(400).json(errorParams);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryID = req.params.id;
    const deletedCategory = await Category.destroy({
      where: { id: categoryID }
    })
    console.log(`Successfully Deleted Category`, deletedCategory);
    res.status(200).json({ message: `Successfully Deleted Category` });
  } catch (error) {
    let errorMessage = `Error Deleting Category`;
    let errorParams = { error, dataToInsert: req.body, response: res, errorMessage };
    console.log(errorMessage, errorParams);
    res.status(400).json(errorParams);
  }
});

module.exports = router;
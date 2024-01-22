const router = require('express').Router();
const { Tag } = require('../../models');
const { getTags } = require('../../global');

// The `/api/tags` endpoint

router.get('/', (req, res) => getTags(req, res));

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(201).json({ message: `Successfully Created Tag`, newTag });
  } catch (error) {
    let errorMessage = `Error Creating New Tag`;
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
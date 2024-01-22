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

router.put('/:id', async (req, res) => {
  try {
    const tagID = req.params.id;
    const updatedTag = await Tag.update(req.body, {
      where: { id: tagID }
    })
    console.log(`Successfully Updated Tag`, updatedTag);
    res.status(200).json({ message: `Successfully Updated Tag` });
  } catch (error) {
    let errorMessage = `Error Updating Tag`;
    let errorParams = { error, dataToInsert: req.body, response: res, errorMessage };
    console.log(errorMessage, errorParams);
    res.status(400).json(errorParams);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tagID = req.params.id;
    const deletedTag = await Tag.destroy({
      where: { id: tagID }
    })
    console.log(`Successfully Deleted Tag`, deletedTag);
    res.status(200).json({ message: `Successfully Deleted Tag` });
  } catch (error) {
    let errorMessage = `Error Deleting Tag`;
    let errorParams = { error, dataToInsert: req.body, response: res, errorMessage };
    console.log(errorMessage, errorParams);
    res.status(400).json(errorParams);
  }
});

module.exports = router;
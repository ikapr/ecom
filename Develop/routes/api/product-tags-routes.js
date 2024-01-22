const router = require('express').Router();
const { ProductTag } = require('../../models');
const { getProductTags, getProductTagById } = require('../../global');

// The `/api/product-tags` endpoint

router.get('/', (req, res) => getProductTags(req, res));

router.get('/:id', (req, res) => getProductTagById(req, res));

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

router.put('/:id', async (req, res) => {
  try {
    const productTagID = req.params.id;
    const updatedProductTag = await ProductTag.update(req.body, {
      where: { id: productTagID }
    })
    console.log(`Successfully Updated Product Tag`, updatedProductTag);
    res.status(200).json({ message: `Successfully Updated Product Tag` });
  } catch (error) {
    let errorMessage = `Error Updating Product Tag`;
    let errorParams = { error, dataToInsert: req.body, response: res, errorMessage };
    console.log(errorMessage, errorParams);
    res.status(400).json(errorParams);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const productTagID = req.params.id;
    const deletedProductTag = await ProductTag.destroy({
      where: { id: productTagID }
    })
    console.log(`Successfully Deleted Product Tag`, deletedProductTag);
    res.status(200).json({ message: `Successfully Deleted Product Tag` });
  } catch (error) {
    let errorMessage = `Error Deleting Product Tag`;
    let errorParams = { error, dataToInsert: req.body, response: res, errorMessage };
    console.log(errorMessage, errorParams);
    res.status(400).json(errorParams);
  }
});

module.exports = router;
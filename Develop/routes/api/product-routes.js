const router = require('express').Router();
const { Product } = require('../../models');
const { getProducts, getProductsById } = require('../../global');

// The `/api/products` endpoint

// get all products
router.get('/', (req, res) => getProducts(req, res));

// get one product
router.get('/:id', (req, res) => getProductsById(req, res));

// create new product
router.post('/', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({ message: `Successfully Created Product`, newProduct });
  } catch (error) {
    let errorMessage = `Error Creating New Product`;
    let errorParams = { error, dataToInsert: req.body, response: res, errorMessage };
    console.log(errorMessage, errorParams);
    res.status(400).json(errorParams);
  }
});

// update product
router.put('/:id', async (req, res) => {
  try {
    const productID = req.params.id;
    const updatedProduct = await Product.update(req.body, {
      where: { id: productID }
    })
    console.log(`Successfully Updated Product`, updatedProduct);
    res.status(200).json({ message: `Successfully Updated Product` });
  } catch (error) {
    let errorMessage = `Error Updating Product`;
    let errorParams = { error, dataToInsert: req.body, response: res, errorMessage };
    console.log(errorMessage, errorParams);
    res.status(400).json(errorParams);
  }
  // update product data
  // Product.update(req.body, {
  //   where: {
  //     id: req.params.id,
  //   },
  // })
  //   .then((product) => {
  //     if (req.body.tagIds && req.body.tagIds.length) {

  //       ProductTag.findAll({
  //         where: { product_id: req.params.id }
  //       }).then((productTags) => {
  //         // create filtered list of new tag_ids
  //         const productTagIds = productTags.map(({ tag_id }) => tag_id);
  //         const newProductTags = req.body.tagIds
  //           .filter((tag_id) => !productTagIds.includes(tag_id))
  //           .map((tag_id) => {
  //             return {
  //               product_id: req.params.id,
  //               tag_id,
  //             };
  //           });

  //         // figure out which ones to remove
  //         const productTagsToRemove = productTags
  //           .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
  //           .map(({ id }) => id);
  //         // run both actions
  //         return Promise.all([
  //           ProductTag.destroy({ where: { id: productTagsToRemove } }),
  //           ProductTag.bulkCreate(newProductTags),
  //         ]);
  //       });
  //     }

  //     return res.json(product);
  //   })
  //   .catch((err) => {
  //     // console.log(err);
  //     res.status(400).json(err);
  //   });
});

router.delete('/:id', (req, res) => {
  // delete one product by its `id` value
});

module.exports = router;
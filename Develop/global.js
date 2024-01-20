const { Category, Product, Tag, ProductTag } = require("./models");

const getCategories = async (request, response) => {
    let errorMessage = `Error Getting Categories`;
    try {
        const categories = await Category.findAll({ includes: [Product] });
        response.json(categories);
    } catch (error) {
        console.log(errorMessage, error);
        response.status(500).json({ error: errorMessage });
    }
}

const getProducts = async (request, response) => {
    let errorMessage = `Error Getting Products`;
    try {
        const products = await Product.findAll();
        response.json(products);
    } catch (error) {
        console.log(errorMessage, error);
        response.status(500).json({ error: errorMessage });
    }
}

const getTags = async (request, response) => {
    let errorMessage = `Error Getting Tags`;
    try {
        const tags = await Tag.findAll();
        response.json(tags);
    } catch (error) {
        console.log(errorMessage, error);
        response.status(500).json({ error: errorMessage });
    }
}

const getProductTags = async (request, response) => {
    let errorMessage = `Error Getting Product Tags`;
    try {
        const productTags = await ProductTag.findAll();
        response.json(productTags);
    } catch (error) {
        console.log(errorMessage, error);
        response.status(500).json({ error: errorMessage });
    }
}

module.exports = {
    getCategories,
    getProducts,
    getTags,
    getProductTags,
}
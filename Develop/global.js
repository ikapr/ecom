const { Category, Product, Tag, ProductTag } = require("./models");

const getCategories = async (request, response) => {
    let errorMessage = `Error Getting Categories`;
    try {
        const categories = await Category.findAll({ includes: [Product] });
        let modifiedCategories = categories.map(cat => {
            return {
                id: cat.id,
                name: cat.name,
                category_name: cat.name,
            }
        })
        response.json(modifiedCategories);
    } catch (error) {
        console.log(errorMessage, error);
        response.status(500).json({ error: errorMessage });
    }
}

const getCategoryById = async (request, response) => {
    let errorMessage = `Error Getting Category`;
    try {
        const categoryId = request.params.id;
        const categories = await Category.findAll({ includes: [Product] });
        
        let modifiedCategories = categories.map(cat => {
            return {
                id: cat.id,
                name: cat.name,
                category_name: cat.name,
            }
        })

        let categoryThatMatchesTheNumberWePutInTheURL = modifiedCategories.find(cat => cat.id == categoryId);
        response.json(categoryThatMatchesTheNumberWePutInTheURL);
    } catch (error) {
        console.log(errorMessage, error);
        response.status(500).json({ error: errorMessage });
    }
}

const getProducts = async (request, response) => {
    let errorMessage = `Error Getting Products`;
    try {
        const products = await Product.findAll();
        const categories = await Category.findAll({ includes: [Product] });

        let modifiedProducts = products.map(pr => {
            return {
                id: pr.id,
                name: pr.name,
                stock: pr.stock,
                price: pr.price,
                category_id: pr.category_id,
                date: new Date().toLocaleString(),
                category: categories.find(cat => cat.id == pr.category_id)?.name,
            }
        })

        response.json(modifiedProducts);
    } catch (error) {
        console.log(errorMessage, error);
        response.status(500).json({ error: errorMessage });
    }
}

const getProductsById = async (request, response) => {
    let errorMessage = `Error Getting Product`;
    try {
        const productId = request.params.id;
        const products = await Product.findAll();
        const categories = await Category.findAll({ includes: [Product] });

        let modifiedProducts = products.map(pr => {
            return {
                id: pr.id,
                name: pr.name,
                stock: pr.stock,
                price: pr.price,
                category_id: pr.category_id,
                date: new Date().toLocaleString(),
                category: categories.find(cat => cat.id == pr.category_id)?.name,
            }
        })

        let productThatMatchesTheNumberWePutInTheURL = modifiedProducts.find(prd => prd.id == productId);
        response.json(productThatMatchesTheNumberWePutInTheURL);
    } catch (error) {
        console.log(errorMessage, error);
        response.status(500).json({ error: errorMessage });
    }
}

const getTags = async (request, response) => {
    let errorMessage = `Error Getting Tags`;
    try {
        const tags = await Tag.findAll();
        const products = await Product.findAll();
        const productTags = await ProductTag.findAll();

        let modifiedProductTags = productTags.map(prt => {
            return {
                id: prt.id,
                tag_id: prt.tag_id,
                product_id: prt.product_id,
                date: new Date().toLocaleString(),
                tag: tags.find(tg => tg.id == prt.tag_id)?.name,
                product: products.find(pr => pr.id == prt.product_id)?.name,
            }
        })

        let modifiedTags = tags.map(tg => {
            let productsWithThisTag = modifiedProductTags.filter(mprtg => tg.name == mprtg.tag);
            let productNamesWithThisTag = productsWithThisTag.map(pr => pr.product);
            return {
                id: tg.id,
                name: tg.name,
                productsWithThisTag: productNamesWithThisTag
            }
        })

        response.json(modifiedTags);
    } catch (error) {
        console.log(errorMessage, error);
        response.status(500).json({ error: errorMessage });
    }
}

const getTagById = async (request, response) => {
    let errorMessage = `Error Getting Tag`;
    try {
        const tagId = request.params.id;
        const tags = await Tag.findAll();

        let tagThatMatchesID = tags.find(tg => tg.id == tagId);
        response.json(tagThatMatchesID);
    } catch (error) {
        console.log(errorMessage, error);
        response.status(500).json({ error: errorMessage });
    }
}

const getProductTags = async (request, response) => {
    let errorMessage = `Error Getting Product Tags`;
    try {
        const tags = await Tag.findAll();
        const products = await Product.findAll();
        const productTags = await ProductTag.findAll();

        let modifiedProductTags = productTags.map(prt => {
            return {
                id: prt.id,
                tag_id: prt.tag_id,
                product_id: prt.product_id,
                date: new Date().toLocaleString(),
                tag: tags.find(tg => tg.id == prt.tag_id)?.name,
                product: products.find(pr => pr.id == prt.product_id)?.name,
            }
        })

        response.json(modifiedProductTags);
    } catch (error) {
        console.log(errorMessage, error);
        response.status(500).json({ error: errorMessage });
    }
}

const getProductTagById = async (request, response) => {
    let errorMessage = `Error Getting Product Tag`;
    try {
        const productTagId = request.params.id;
        const tags = await Tag.findAll();
        const products = await Product.findAll();
        const productTags = await ProductTag.findAll();

        let modifiedProductTags = productTags.map(prt => {
            return {
                id: prt.id,
                tag_id: prt.tag_id,
                product_id: prt.product_id,
                date: new Date().toLocaleString(),
                tag: tags.find(tg => tg.id == prt.tag_id)?.name,
                product: products.find(pr => pr.id == prt.product_id)?.name,
            }
        })

        let productTagThatMatchesID = modifiedProductTags.find(prtg => prtg.id == productTagId);
        response.json(productTagThatMatchesID);
    } catch (error) {
        console.log(errorMessage, error);
        response.status(500).json({ error: errorMessage });
    }
}

module.exports = {
    getCategories,
    getProducts,
    getTags,
    getTagById,
    getProductTags,
    getCategoryById,
    getProductsById,
    getProductTagById,
}
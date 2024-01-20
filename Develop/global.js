const { Category } = require("./models");

const getCategories = async (request, response) => {
    let errorMessage = `Error Getting Categories`;
    try {
        // const categories = await Category.findAll({ includes: [Product] });
        const categories = await Category.findAll();
        response.json(categories);
    } catch (error) {
        console.log(errorMessage, error);
        response.status(500).json({ error: errorMessage });
    }
}

module.exports = {
    getCategories
}
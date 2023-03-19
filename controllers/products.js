const Product = require("../models/Product");

const getAllProductsStatic = async (req, res) => {
    // throw new Error('testing async error handling')
    // res.status(200).json({msg: 'testing'})
    const products = await Product.find({ name: "vase table" });
    res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
    // console.log(req.query);
    // res.status(200).json({ msg: "products route" });
    const { featured, company, name } = req.query;
    const queryObject = {};
    if (featured) {
        queryObject.featured = featured === "true" ? true : false;
    }
    if (company) {
        queryObject.company = company;
    }
    if(name) {
        queryObject.name = { $regex: name, $options: 'i' }
    }
    const products = await Product.find(queryObject);
    res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
    getAllProductsStatic,
    getAllProducts,
};
const getAllProductsStatic = async (req, res) => {
    // throw new Error('testing async error handling')
    res.status(200).json({msg: 'testing'})
}

const getAllProducts = async (req, res) => {
    res.status(200).json({msg: 'products route'})
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}
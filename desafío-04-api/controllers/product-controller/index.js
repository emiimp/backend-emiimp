const Products = require('../data/index');

const products = new Products('desafio.txt');

const productController = {
    addProduct,
    updateProduct,
    deleteProduct
}

const getProducts = async (req, res) => {
    const productsList = await products.getAll();
    res.json(productsList);
} 

const getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await products.getById(id);
    res.json(product);
}

const addProduct = async (req, res) => {
    const product = req.body;
    const id = await products.save(product);
    res.json({ id });
}

const updateProduct = async (req, res) => {
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    await products.deleteById(id);
    res.json({ id });
}

module.exports = productController;



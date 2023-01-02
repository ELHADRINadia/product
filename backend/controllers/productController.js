const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

const getproducts = asyncHandler(async (req, res) => {
        const products = await Product.find({});
        res.json(products);
    });

    const search = async (req, res, next) => {
        const { ...others } = req.query;
        const products = await Product.find({...others});
        if (products.length) {
            res.status(200).json(products);
        } else {
            res.status(400).json({
                message: 'There is no Product'
            });
        }
    };

const createproduct = async (req, res) => {
    const {Name, description ,price, image, qty } = req.body;
    if(!Name || !description  || !price || !image || !qty) {
        res.status(400).json({ message:'text is required or product is not valid'});
    };
    const product = await Product.create({
        Name,
        description,
        price,
        image,
        qty,
       
    });
    res.status(200).json(product);
};
const updateproduct = asyncHandler(async (req, res) => {
    const {Name, description , price, image, qty} = req.body;
    const product = await Product.findById(req.params.id);
    (!product)
      ?  res.status(400)
      && Error('Product not found'):null;
    
    const update = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(update);
});
const deleteproduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        res.status(400)
        throw new Error('Product not found')
    }
    await Product.remove()

    res.status(200).json({id: req.params.id})
};

    module.exports = {
        getproducts,
        search,
        createproduct,
        updateproduct,
        deleteproduct,
    }
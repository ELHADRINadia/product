const express = require('express');
const router = express.Router();
const multer = require('multer');
const {v4: uuidv4} = require('uuid');
const path = require('path');

const {getproducts, search, createproduct, updateproduct, deleteproduct } = require('../controllers/productController');

router.route('/get_products').get(getproducts);
router.route('/search').get(search);
router.route('/create_product').post(createproduct);
router.route('/update_product/:id').put(updateproduct);
router.route('/delete_product/:id').delete(deleteproduct);

module.exports = router;
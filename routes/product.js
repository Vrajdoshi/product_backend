const express = require('express');

const productControllers = require('../controllers/product');

const router = express.Router();

// /api/product => GET
router.get('/' , productControllers.getProducts);

// /api/product => post  add product
router.post('/' , productControllers.postProduct);


// /api/product => DLETE  product
router.delete('/' , productControllers.deleteProduct);

module.exports = router;
const express = require ('express');
const controlProducts = require ('../controllers/controlProducts');
const router = express.Router();

router.get('/carrito',controlProducts.cart)
router.get('/productDetail',controlProducts.detail)
router.get('/list',controlProducts.list)


module.exports = router;

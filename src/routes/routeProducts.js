const express = require ('express');
const controlProducts = require ('../controllers/controlProducts');
const router = express.Router();

router.get('/carrito',controlProducts.cart)
router.get('/productDetail',controlProducts.detail)
router.get('/create',controlProducts.create)

router.post('/',controlProducts.save)


module.exports = router;

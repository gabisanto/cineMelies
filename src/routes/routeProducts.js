const express = require ('express');
const controlProducts = require ('../controllers/controlProducts');
const router = express.Router();

router.get('/carrito',controlProducts.cart)

router.get('/list',controlProducts.list)

router.get('/:id',controlProducts.show)

router.get('/:id/edit',controlProducts.update)

router.delete('/',controlProducts.delete)
router.put("/:id", controlProducts.modify)

module.exports = router;

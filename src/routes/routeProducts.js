const express = require ('express');
const controlProducts = require ('../controllers/controlProducts');
const router = express.Router();

router.get('/carrito',controlProducts.cart)

router.get('/',controlProducts.list)

router.get('/create',controlProducts.create)

router.get('/:id',controlProducts.show)

router.get('/:id/edit',controlProducts.update)

router.delete('/',controlProducts.delete)
router.put("/:id", controlProducts.modify)

router.post('/',controlProducts.save)

module.exports = router;




module.exports = router;

const express = require ('express');
const controlProducts = require ('../controllers/controlProducts');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const upload = multer({storage: multer.diskStorage({
    destination: (req,file,cb) => cb(null, path.resolve(__dirname,'../../uploads')),
    filename: (req,file,cb) => cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    //filename: function (req, file, cb) {
        //cb(null, 'upload_at_' + Date.now() + path.extname(file.originalname))
      //}
})})
const auth = require('../middlewares/auth')
const access = require('../middlewares/access');


router.get('/carrito',[access],controlProducts.cart)

router.get('/',controlProducts.listMovie)

router.get('/other',controlProducts.listOther)

router.get('/create',controlProducts.create) //muestra formulario de creación de película y producto

//router.get('/create',[auth],controlProducts.create)

router.get('/:id/newScreening',controlProducts.createScreening)

//router.get('/:id/newScreening',[auth],controlProducts.createScreening)

//hacer el POST de new screening

router.get('/:id',controlProducts.showMovie) // muestra vista de película

router.get('/other/:id',controlProducts.showOther) // muestra vista de otros productos (bebida, alimento, etc)

router.get('/:id/edit',[auth],controlProducts.update)

router.delete('/',controlProducts.delete)
router.put("/:id", controlProducts.modify)

router.post('/create',[upload.single("createImage")],controlProducts.saveMovie) //guarda película

router.post('/other/create',[upload.single("createImage")],controlProducts.saveOther) //guarda otros productos

router.post('/:id/newScreening',controlProducts.saveScreening) //guarda funciones



module.exports = router;



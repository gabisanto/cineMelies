const express = require ('express');
const controlAdmin = require ('../controllers/controlAdmin');
const router = express.Router();

router.get('/create',controlAdmin.create)
// la ruta edit interfiere con el metodo
//router.get('/modify',controlAdmin.edit)



module.exports = router;

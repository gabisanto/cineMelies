const express = require ('express');
const controlAdmin = require ('../controllers/controlAdmin');
const router = express.Router();

router.get('/create',controlAdmin.create)
// router.get('/edit',controlAdmin.edit)



module.exports = router;

const express = require ('express');
const controlAdmin = require ('../controllers/controlAdmin');
const router = express.Router();


router.get('/create',controlAdmin.create)

module.exports = router;

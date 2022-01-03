const express = require ('express');
const controlUsers = require ('../controllers/controlUsers');
const router = express.Router();

router.get('/login',controlUsers.login)
router.get('/register',controlUsers.register)


module.exports = router;
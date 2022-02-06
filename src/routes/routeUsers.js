const express = require ('express');
const controlUsers = require ('../controllers/controlUsers');
const router = express.Router();

router.get('/login',controlUsers.login)
router.get('/register',controlUsers.register)
router.get('/profile',controlUsers.profile)

router.post('/',controlUsers.save)
router.post('/access',controlUsers.save)
router.post('/logout',controlUsers.logout)

module.exports = router;
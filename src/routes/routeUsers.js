const express = require ('express');
const controlUsers = require ('../controllers/controlUsers');
const router = express.Router();
const {validate} = require ('../models/user')
const access = require('../middlewares/access');

router.get('/',controlUsers.list)
router.get('/login',controlUsers.login)
router.get('/register',controlUsers.register)
router.get('/profile',[access],controlUsers.profile)

router.post('/',[validate],controlUsers.save)
router.post('/access',[validate],controlUsers.access)
router.post('/logout',controlUsers.logout)
//router.post("/upload/avatar",[access,upload.any()],user.uploadAvatar);

module.exports = router;
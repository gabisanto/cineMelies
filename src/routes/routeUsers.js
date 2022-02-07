const express = require ('express');
const multer = require('multer');
const controlUsers = require ('../controllers/controlUsers');
const router = express.Router();
const {validate} = require ('../models/user')
const access = require('../middlewares/access');
const auth = require('../middlewares/auth');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req,file,cb) => cb(null,path.join(__dirname,'../../uploads','avatars')),
    filename: (req,file,cb) => cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
})
const upload = multer({storage:storage})

router.get('/',[auth],controlUsers.list)
router.get('/login',controlUsers.login)
router.get('/register',controlUsers.register)
router.get('/profile',[access],controlUsers.profile)

router.post('/',[validate],controlUsers.save)
router.post('/access',controlUsers.access)
router.post('/logout',controlUsers.logout)
router.post('/upload/avatar',[access,upload.any()],controlUsers.avatar);

module.exports = router;
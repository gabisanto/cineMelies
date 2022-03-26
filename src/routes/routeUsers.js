const express = require ('express');
const multer = require('multer');
const controlUsers = require ('../controllers/controlUsers');
const router = express.Router();
const validate = require ('../middlewares/validate')
const access = require('../middlewares/access');
const auth = require('../middlewares/auth');
const edit = require('../middlewares/validate');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req,file,cb) => cb(null,path.join(__dirname,'../../uploads','avatars')),
    filename: (req,file,cb) => cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
})
const upload = multer({storage:storage})

router.get('/',[auth],controlUsers.list) //ok
router.get('/login',controlUsers.login) //ok
router.get('/register',controlUsers.register) //ok
router.get('/profile',[access],controlUsers.profile) //ok

router.post('/',[validate],controlUsers.save) //ok
router.post('/access',controlUsers.access) //ok
router.post('/logout',controlUsers.logout) //ok
router.post('/upload/avatar',[access,upload.single("imagenUsuario")],controlUsers.avatar); //ok

router.get('/:id/edit',controlUsers.updateUser)
router.put("/:id", [edit],controlUsers.modifyUser)

router.delete('/',controlUsers.deleteUser)

module.exports = router;
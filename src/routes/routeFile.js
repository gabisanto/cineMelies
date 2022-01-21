const express = require('express');
const controlFiles = require('../controllers/controlFiles');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const upload = multer({storage: multer.diskStorage({
    destination: (req,file,cb) => cb(null, path.resolve(__dirname,'../../uploads')),
    filename: (req,file,cb) => cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
})})



router.get('/',controlFiles.upload);

router.post('/',[upload.any()],controlFiles.store)


module.exports = router;
const express = require("express");
const router = express.Router();
const apiUserController = require('../../controllers/api/apiControlUsers');

// Users
//router.get("/", (req, res) =>{ res.redirect('/')}); 

router.get('/', apiUserController.list);
//router.get('/latest', apiUserController.userLatest);
router.get('/:id', apiUserController.userId);

module.exports = router;  
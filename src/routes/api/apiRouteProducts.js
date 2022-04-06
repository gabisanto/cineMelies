const express = require("express");
const router = express.Router();
const apiProductController = require('../../controllers/api/apiControlProducts');


router.get('/movies', apiProductController.listMovie);
router.get('/movies/latest', apiProductController.latestMovie);
router.get('/movies/:id', apiProductController.movieId);
router.get('/other', apiProductController.listOther);
router.get('/other/:id', apiProductController.OtherId);

module.exports = router;  
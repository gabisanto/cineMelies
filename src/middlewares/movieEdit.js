const validator = require('express-validator');
const db = require('../database/models');
const path = require ('path');
const validations = [
    validator.body('productName')
        .notEmpty().withMessage('El nombre no puede estar vacío.')
        .isLength({min:2}).withMessage('El nombre debe tener un mínimo de 2 caracteres.'),
    validator.body('productDescription')
        .notEmpty().withMessage('La descripción no puede estar vacía.')
        .isLength({min:2,max:600}).withMessage('La descripción debe tener entre 2 y 600 caracteres.'),
    validator.body('productLink')
        .notEmpty().withMessage('El link no puede estar vacío.')
        .matches(/^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/).withMessage('El link debe ser válido.'),
    validator.body('category_id')
        .notEmpty().withMessage('Elija una opción.'),
    validator.body('restriction_id')
        .notEmpty().withMessage('Elija una opción.'),
    validator.body('genre_id')
        .notEmpty().withMessage('Elija una opción.'),
]

module.exports = validations;
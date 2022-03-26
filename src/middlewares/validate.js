const validator = require('express-validator');
const db = require('../database/models');
const validations = [
    validator.body('email')
        .notEmpty().withMessage('El email no puede estar vacío.')
        .isEmail().withMessage('Ingrese un email válido'),
    validator.body('password')
        .notEmpty().withMessage('La contraseña es obligatoria.')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i").withMessage('La contraseña debe contener mínimo 8 caracteres, y al menos una mayúscula, una minúscula, un número y un carácter especial'),
    validator.body('name')
        .notEmpty().withMessage('El nombre no puede estar vacío.')
        .matches(/^[A-Za-z ]+$/).withMessage('El nombre sólo puede tener letras')
        .isLength({min:2, max: 300}).withMessage('El nombre debe tener entre 2 y 300 caracteres.'),
    validator.body('document')
        .notEmpty().withMessage('El documento no puede estar vacío.')
        .matches(/^[0-9]+$/).withMessage('El documento sólo puede tener números.')
        .isLength({min:7,max:9}).withMessage('El documento debe tener entre 7 y 9 números.'),
    validator.body('birthDate')
        .notEmpty().withMessage('La fecha de nacimiento no puede estar vacía')
        .isDate().withMessage('La fecha debe ser válida')
]

module.exports = validations;
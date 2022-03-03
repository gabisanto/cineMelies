const validator = require('express-validator');
const db = require('../database/models');
const validations = [
    validator.body('email').isEmail().withMessage('Ingrese un email válido'),
    validator.body('password').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i").withMessage('La contraseña debe contener mínimo 8 caracteres, y al menos una mayúscula, una minúscula, un número y un carácter especial')
]

module.exports = validations;
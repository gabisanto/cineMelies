const validator = require('express-validator');
const validations = [
    validator.body('screen_id').notEmpty().withMessage('Elija una sala.'),
    validator.body('day').notEmpty().withMessage('Elija un día.'),
    validator.body('language_id').notEmpty().withMessage('Elija un idioma.'),
    validator.body('hour')
        .notEmpty().withMessage('El horario no puede estar vacío.')
        .matches(/^(20|21|22|23|[0-1]\d)[0-5]\d$/).withMessage('Ingrese una hora válida en formato HHMM.')
]

module.exports = validations;
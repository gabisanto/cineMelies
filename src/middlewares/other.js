const validator = require('express-validator');
const db = require('../database/models');
const path = require ('path');
const validations = [
    validator.body('type_id').notEmpty().withMessage('Elija un tipo de producto.'),
    validator.body('name')
        .notEmpty().withMessage('El nombre no puede estar vacío.')
        .isLength({min:2, max: 50}).withMessage('El nombre debe tener entre 2 y 50 caracteres.'),
    validator.body('description')
        .notEmpty().withMessage('La descripción no puede estar vacía.')
        .isLength({min:5, max: 600}).withMessage('La descripción debe tener entre 5 y 600 caracteres.'),
    validator.body('price')
        .notEmpty().withMessage('El precio no puede estar vacío.')
        .isNumeric({no_symbols: true}).withMessage('El precio debe ser un número.')
        .isLength({min:1, max: 5}).withMessage('El precio debe tener entre 1 y 5 caracteres.'),
    validator.body('createImage').custom((value,{req})=>{
        if (!req.file) {throw new Error("La imagen es obligatoria.")}
        else {
            let allowedExtensions = ['.jpeg','.jpg','.gif','.png'];
            let file = req.file
            let fileExtension = path.extname(file.filename)
            if(!allowedExtensions.includes(fileExtension)){
                throw new Error("Solo se admiten archivos .jpeg .jpg .png .gif")
        }
    }
    return true
})
]

module.exports = validations;
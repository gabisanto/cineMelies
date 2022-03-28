const validator = require('express-validator');
const db = require('../database/models');
const path = require ('path');
const validations = [
    validator.body('name')
        .notEmpty().withMessage('El nombre no puede estar vacío.')
        .isLength({min:2}).withMessage('El nombre debe tener un mínimo de 2 caracteres.'),
    validator.body('productLink')
        .notEmpty().withMessage('El link no puede estar vacío.')
        .matches(/^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/).withMessage('El link debe ser válido.'),
    validator.body('category_id')
        .notEmpty().withMessage('Elija una opción.'),
    validator.body('restriction_id')
        .notEmpty().withMessage('Elija una opción.'),
    validator.body('genre_id')
        .notEmpty().withMessage('Elija una opción.'),
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
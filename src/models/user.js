const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const {body} = require('express-validator');

const model = {
    file: path.resolve(__dirname,'../data','listUsers.json'),
    read: () => fs.readFileSync(model.file,'utf8'),
    write: data => fs.writeFileSync(model.file,JSON.stringify(data,null,2)),
    all: () => JSON.parse(model.read()),
    search: (prop,value) => model.all().find(element => element[prop] == value),
    generated: data => Object({
        id: model.all().length == 0 ? 1 : model.all().pop().id + 1,
        nombreCompleto: data.nombreCompleto,
        Documento: data.Documento,
        fecha: data.fecha,
        email:String(data.email),
        clave: bcrypt.hashSync(data.clave,10),
        admin: String(data.email).includes('@cinemelies.com.ar'),
        isActive: true
    }),
    create: data => {
        let all = model.all();
        let user = model.generated(data);
        all.push(user);
        model.write(all)
        return user
    },
    validate: [
        body('email').isEmail().withMessage('Ingrese un email válido'),
        body('clave').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i").withMessage('La contraseña debe contener mínimo 8 caracteres, y al menos una mayúscula, una minúscula, un número y un carácter especial')
    ]

}

module.exports = model
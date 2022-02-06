const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const validator = require('express-validator');

const model = {
    file: path.resolve(__dirname,'../data','users.json'),
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
        password: bcrypt.hashSync(data.password,10),
        isAdmin: String(data.email).includes('@cinemelies.com.ar'),
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
        validator.body('email').isEmail(),
        validator.password('password').isLength({ min: 8})
    ]

}

module.exports = model
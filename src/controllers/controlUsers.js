const validator = require('express-validator');
const user = require('../models/user');

module.exports = {
    login: (req,res) => res.render('users/login',{
        styles: ['login'],
        title: 'Inicio de sesión'
    }),
    register: (req,res) => res.render('users/register',{
        styles: ['register'],
        title: 'Registrarse'
    }),
    profile: (req,res) => res.render('users/profile',{
        styles: ['profile','forms'],
        title: 'Mi perfil'
    }),
    access: (req,res) => res.send({
        data: req.body,
        msg: 'PLACEHOLDER'
    }),
    save: (req,res) => {
        let errors = validator.validationResult(req).mapped()
        if (errors.length > 0) {
            return res.render ('users/register',{
                styles: ['register'],
                title: 'Registrarse',
                errors,
            })
        }
        let exist = user.search('email',req.body.email)
        if(exist) {
            return res.render ('users/register',{
                styles: ['register'],
                title: 'Registrarse',
                errors: {
                    email:{
                        msg: 'Ese mail ya está en uso'
                    }
                },
            })
        }
        let newUser = user.create(req.body)
        res.send({
            error: errors,
            data:req.body,
            user: newUser,
            msg: 'llego del register'
        })
    },
    logout: (req,res) => res.send({
        data: req.session,
        msg: 'PLACEHOLDER'
    }),
}
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
    list: (req,res) => res.render('users/list',{
        styles:['list'],
        title: 'Listado de usuarios',
        users: user.all()
    }),
    access: (req,res) => res.send({
        data: req.body,
        msg: 'PLACEHOLDER'
    }),
    save: (req,res) => {
        let errors = validator.validationResult(req)
        if (!errors.isEmpty()) {
            return res.render ('users/register',{
                styles: ['register'],
                title: 'Registrarse',
                errors: errors.mapped(),
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
        res.redirect('/users/login')
    },
    logout: (req,res) => {
        delete req.session.user
        res.cookie('email',null,{maxAge:-1})
        return res.redirect('/')
    },
}
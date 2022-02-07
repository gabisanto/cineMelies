const validator = require('express-validator');
const userModel = require('../models/user');
const bcrypt = require('bcrypt')

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
        users: userModel.all()
    }),

    access: (req,res) => {
        let errors = validator.validationResult(req)
        if (!errors.isEmpty()) {
            return res.render ('users/login',{
                styles: ['login'],
                title: 'Usuario',
                errors: errors.mapped(),
            })
        }
        
        let exist = userModel.search('email',req.body.email)

        if(!exist) {
           return res.render('users/login',{
                styles: ['login'],
                title: 'Usuario',
                errors:{
                   email:{
                       msg: 'Email no registrado'
                   }
               }
           })
        }

        if(!bcrypt.compareSync(req.body.clave,exist.clave)) {
            return res.render('users/login',{
                styles: ['login'],
                title: 'Usuario',
                errors:{
                    clave:{
                        msg: 'Contraseña invalida'
                    }
                }
            })
         }

        if(req.body.remember){
            res.cookie('email',req.body.email,{maxAge:1000*60*60*24*30})
        }
        req.session.user = exist

        return res.redirect("/")
    },
    save: (req,res) => {
        let errors = validator.validationResult(req)
        if (!errors.isEmpty()) {
            return res.render ('users/register',{
                styles: ['register'],
                title: 'Registrarse',
                errors: errors.mapped(),
            })
        }
        let exist = userModel.search('email',req.body.email)
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
        let newUser = userModel.create(req.body)
        res.redirect('/users/login')
    },
     logout: (req,res) => {
        delete req.session.user
        res.cookie('email',null,{maxAge:-1})
        return res.redirect('/')
    },
  /* profile: (req, res) => res.render('users/profile'),
    uploadAvatar: (req, res) => {
        let update = user.update(req.session.user.id, {avatar: req.files ? req.files[0].filename : null});
        req.session.user = update;
        return res.redirect('users/profile');
    }*/
}
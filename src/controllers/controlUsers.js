const validator = require('express-validator');
const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const db = require('../database/models');
const user = require('../middlewares/user');
const Op = db.Sequelize.Op

module.exports = {
    login: (req,res) => res.render('users/login',{
        styles: ['login'],
        title: 'Inicio de sesión'
    }),
    register: (req,res) => res.render('users/register',{
        styles: ['register'],
        title: 'Registrarse'
    }),
    profile: (req,res) => {
        db.User.findByPk(req.session.user.id,{
            include: ["avatar"]
        })

        .then(usuario => {
            res.render('users/profile',{
                styles: ['profile','forms'],
                title: 'Mi perfil',
                user:usuario
        })
        })
    
        
    },

    list: (req,res) => {
        db.User.findAll({
            include: ["avatar"]
        })
        .then(function(users) {return res.render('users/list',{
            styles: ['listUser'],
            title: 'Listado de usuarios',
            users: users
        })})
        
    },
       
    
        // res.render('users/list',{
        // styles:['list'],
        // title: 'Listado de usuarios',
        // users: userModel.all()
        // }),

    access: (req,res) => {
        let errors = validator.validationResult(req)
        if (!errors.isEmpty()) {
            return res.render ('users/login',{
                styles: ['login'],
                title: 'Usuario',
                errors: errors.mapped(),
            })
        }
        
        db.User.findOne({where : {email: req.body.email}})
        .then (userFound =>{
            if(!userFound) {
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
             else if
                (!bcrypt.compareSync(req.body.password,userFound.password)) {
                    return res.render('users/login',{
                        styles: ['login'],
                        title: 'Usuario',
                        errors:{
                            password:{
                                msg: 'Contraseña invalida'
                            }
                        }
                    })
                 }
            else {req.session.user = userFound}
        })
        .then(() => {
            if(req.body.remember){
                res.cookie('email',req.body.email,{maxAge:1000*60*60*24*30})
            }
        }).then(() => res.redirect("/users/profile"))
        

    },
    save: (req,res) => {
        let errors = validator.validationResult(req)
        if (!errors.isEmpty()) {
            return res.render ('users/register',{
                styles: ['register'],
                title: 'Registrarse',
                errors: errors.mapped(),
                userInput:req.body
            })
        }
        db.User.findOne({where : {email : req.body.email}})
        .then (userFound => {
            if(userFound) {
                return res.render ('users/register',{
                    styles: ['register'],
                    title: 'Registrarse',
                    errors: {
                        email:{
                            msg: 'Ese mail ya está en uso'
                        }
                    }})
            } else {
                db.User.create({
                    name: req.body.name,
                    document: req.body.document,
                    birthDate: req.body.birthDate,
                    email: req.body.email,
                    avatar_id: 1,
                    password: bcrypt.hashSync(req.body.password,10),
                    admin: String(req.body.email).includes('@cinemelies.com.ar'),
                    isActive: true
                })
            }
        }).then(() => res.redirect("/users/login"))
    },

    

    //     let exist = userModel.search('email',req.body.email)
    //     if(exist) {
    //         return res.render ('users/register',{
    //             styles: ['register'],
    //             title: 'Registrarse',
    //             errors: {
    //                 email:{
    //                     msg: 'Ese mail ya está en uso'
    //                 }
    //             },
    //         })
    //     }
    //     let newUser = userModel.create(req.body)
    //     res.redirect('/users/login')
    // },
     logout: (req,res) => {
        delete req.session.user
        res.cookie('email',null,{maxAge:-1})
        return res.redirect('/')
    },
    avatar: (req, res) => {
        db.Avatar.create({
            url: req.file.filename
        })
        .then(avatar => {
            db.User.update({
                avatar_id : avatar.id
            }, {
                where : { id: req.session.user.id }
            })
        
        })

        .then(() => {
            return res.redirect('/users/profile')
        })

        // let update = userModel.update(req.session.user.id, {avatar: req.files ? req.files[0].filename : null});
        // req.session.user = update;
        // return res.redirect('/users/profile');
    },

    deleteUser: (req,res) => {
        db.User.destroy({
            where: {id: req.body.id}
        })
        .then(function() {return res.redirect("/users/")})
    },

    updateUser: (req,res) => {
        db.User.findByPk(req.params.id)
        .then (function (user) 
            {return res.render('./users/editUser',{
                styles:["register"],
                title: "Actualizar usuario",
                user: user,
                id:req.params.id
        })})
        .catch(err => {
            res.redirect("/")
        })
    },

    modifyUser: (req,res) => {
        let errors = validator.validationResult(req)
        if (!errors.isEmpty()) {
            return res.render ('users/editUser',{
                styles: ['register'],
                title: 'Actualizar usuario',
                
                errors: errors.mapped(),
            })
        }
        db.User.findOne({where : {email : req.body.email}})
        .then (userFound => {
            if(userFound) {
                return res.render ('users/editUser',{
                    styles: ['register'],
                    title: 'Actualizar usuario',
                    user: userFound,
                    errors: {
                        email:{
                            msg: 'Ese mail ya está en uso'
                        }
                    }})
            } else {
        db.User.update({
            name: req.body.name,
            email: req.body.email,
            birthDate: req.body.birthDate,
            document: req.body.document
        }, {
            where: {id: req.params.id}
        })
        .then(function () {
            return res.redirect('/users/')
        })}
    })},

}
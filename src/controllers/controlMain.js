const product = require('../models/product.js');
const file = require('../models/file.js');
const db = require('../database/models');
const Op = db.Sequelize.Op

module.exports = {
    home: (req,res) => {
        //let list = product.all().map(product => Object ({...product,createImage : file.search('id',product.createImage[0]).url}))
        db.Movie.findAll({
            include: ["genre","category","poster","restriction","screenings"]
        })
        .then(function(pelicula) {return res.render('main/home',{
            styles: ['home'],
            title: 'Cine Melies',
            pelicula: pelicula
            // productsClasica: list.filter(
            //     element => element.filmCategory == "Clásica"
            // ),
            // productsModerna: list.filter(
            //     element => element.filmCategory == "Moderna"
            // )
        })})
        .catch(err => {
            res.send(err)
        })
    },
    
    about: (req,res) => res.render('./main/nosotros',{
        styles:['nosotros'],
        title: 'Sobre nosotros'
    }),
    agenda: (req,res) => res.render('./main/agenda',{
        styles: ['agenda'],
        title: 'Agenda'
    }),
    salas: (req,res) => res.render('./main/salas',{
        styles: ['salas'],
        title: 'Salas'
    }),
    combos: (req,res) => {
        db.Product.findAll({
            include: ["image","type"]
        }).then(products => {
            res.render('./products/prueba',{
                styles:['combos'],
                title: 'Combos',
                products: products
            })
        })
    },
}

const product = require('../models/product.js');
const file = require('../models/file.js');
const db = require('../database/models');
const Moviescreening = require('../database/models/Moviescreening.js');
const Op = db.Sequelize.Op

module.exports = {
    home: (req,res) => {
        //let list = product.all().map(product => Object ({...product,createImage : file.search('id',product.createImage[0]).url}))
        db.Movie.findAll({
            include: {
                model: db.Screening,
                as: "Screening",
                through: db.Moviescreening,
                required: true
            },
            include: ["genre","category","poster","restriction"]
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
    precios: (req,res) => res.render('./main/precios',{
        styles: ['precios'],
        title: 'Precios'
    }),
    combos: (req,res) => res.render('./main/combos',{
        styles:['combos'],
        title: 'Combos'
    }),
}

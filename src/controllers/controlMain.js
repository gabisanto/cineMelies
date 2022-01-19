const product = require('../models/product.js');

module.exports = {
    home: (req,res) => res.render('./main/home',{
        styles: ['home'],
        title: 'Cine Melies',
        productsClasica: product.all().filter(
            element => element.filmCategory == "Clásica"
        ),
        productsModerna: product.all().filter(
            element => element.filmCategory == "Moderna"
        )
    }),
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

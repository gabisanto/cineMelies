const product = require('../models/product.js');
const file = require('../models/file.js');

module.exports = {
    home: (req,res) => {
        let list = product.all().map(product => Object ({...product,createImage : file.search('id',product.createImage[0]).url}))
        res.render('main/home',{
            styles: ['home'],
            title: 'Cine Melies',
            productsClasica: list.filter(
                element => element.filmCategory == "Clásica"
            ),
            productsModerna: list.filter(
                element => element.filmCategory == "Moderna"
            )
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

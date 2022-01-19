
module.exports = {
    home: (req,res) => res.render('./main/home',{
        styles: ['home'],
        title: 'Cine Melies',
        peliculas: productosPeliculas
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
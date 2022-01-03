module.exports = {
    home: (req,res) => res.render('./main/home'),
    about: (req,res) => res.render('./main/nosotros'),
    agenda: (req,res) => res.render('./main/agenda'),
    precios: (req,res) => res.render('./main/precios'),
    combos: (req,res) => res.render('./main/combos'),
}
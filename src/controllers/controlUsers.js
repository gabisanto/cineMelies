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
    save: (req,res) => res.send({
        data: req.body,
        msg: 'PLACEHOLDER'
    }),
    logout: (req,res) => res.send({
        data: req.session,
        msg: 'PLACEHOLDER'
    }),
}
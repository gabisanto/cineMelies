module.exports = {
    login: (req,res) => res.render('./users/login',{
        styles: ['login'],
        title: 'Inicio de sesión'
    }),
    register: (req,res) => res.render('./users/register',{
        styles: ['register'],
        title: 'Registrarse'
    })
}
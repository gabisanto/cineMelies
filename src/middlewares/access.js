module.exports = (req,res,next) => req.user && req.session.user ? next() : res.redirect('/users/login')
const userModel = require('../models/user');
const db = require("../database/models")
const user = (req,res,next) => {
    let user = null
    if(req.cookie && req.cookie.email){
        db.User.findOne({where : {email : req.cookie.email}})
        .then((found) => {
            req.session.user = found})
        
        //user = userModel.search('email', req.cookie.email)
        
    }
    if(req.session && req.session.user){
        user = req.session.user
    }
    res.locals.user = user
    return next()
}

module.exports = user
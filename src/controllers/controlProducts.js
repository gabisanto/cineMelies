const product = require('../models/product.js');
const file = require('../models/file.js');
const db = require('../database/models');
const Op = db.Sequelize.Op

const controller = {

    cart: (req,res) => res.render('./products/carrito',{
        styles: ['carrito'],
        title: 'Proceso de compra'
    }),

    create: (req,res) => res.render('./products/create',{
        styles: ['create','forms'],
        title: 'Crear película',
    }),

    createOther: (req,res) => res.render('./products/createOther',{
        styles: ['create','forms'],
        title: 'Crear producto',
    }),

    createScreening: (req,res) => {
        //let all = product.all().map(p => Object({...p, createImage: file.search('id',p.createImage)}))
        db.Movie.findByPk(req.params.id)
        //let result = product.all().map(p => Object({...p, createImage: file.search('id',p.createImage)}))
        //let productDetail = product.all().map(product => Object ({...product,createImage : file.search('id',product.createImage[0]).url})) */      
        .then( movie => {
            return movie ? res.render('./products/screening',{
            styles:['screening','forms','create'],
            title: 'Nueva función de ' + movie.productName,
            product: movie,
            id:req.params.id            
        }) : res.redirect("/")})
    },

    saveMovie: (req,res) => {
        db.Poster.create({
            url: req.file.filename
        })
        .then(function (newPoster) {
            db.Movie.create({
                productName: req.body.productName,
                genre_id: req.body.genre_id,
                category_id: req.body.category_id,
                productLink: req.body.productLink,
                productDescription: req.body.productDescription,
                image_id: newPoster.id,
                restriction_id: req.body.restriction_id
            })
            .then(function (product) {
                return res.redirect('/products/' + product.id)
        })
        
        })
    },

    saveOther: (req,res) => {
        db.Image.create({
            url: req.file.filename
        })
        .then(function (newImage) {
        db.Product.create({
            name: req.body.name,
            type_id: req.body.type_id,
            description: req.body.description,
            image_id: newImage.id,
            price: req.body.price
        })
        .then(function (newProduct) {
            return res.redirect('/products/other/' + newProduct.id)
        })
    })
    },

    saveScreening: (req,res) => {
        db.Screening.create({
            hour: req.body.hour,
            day: req.body.day,
            screen_id: req.body.screen_id,
            discount: false,
            language_id: req.body.language_id,
        })
        .then(function(newScreening) {
            db.MovieScreening.create({
                movie_id: req.params.id,
                screening_id: newScreening.id
            })
        })
        .then(function () {
            return res.redirect('/products/' + req.params.id)
        })
    },

    showMovie: (req,res) => {
        db.Movie.findByPk(req.params.id,{
            include: ["genre","category","poster","restriction",{model: db.Screening, as: "screenings",include:["language", "screen"]}]
            
        })
        .then (function (pelicula) 
            {return res.render('./products/movieDetail',{
                styles:['productDetail','forms','create'],
                title: pelicula.productName,
                product: pelicula,
                id:req.params.id
                
        })
     }
        )
        .catch(err => {
            res.send(err)
        })
        // //let all = product.all().map(p => Object({...p, createImage: file.search('id',p.createImage)}))
        // let resultExists = product.search('id',req.params.id)
        // let result = product.all().map(p => Object({...p, createImage: file.search('id',p.createImage)}))
        // //let productDetail = product.all().map(product => Object ({...product,createImage : file.search('id',product.createImage[0]).url})) */      
        // return resultExists ? res.render('./products/productDetail',{
        //     styles:['productDetail','forms','create'],
        //     title: result[req.params.id-1].productName,
        //     product: result,
        //     id:req.params.id
        // }) : res.redirect("/products/")
    },

    showOther: (req,res) => {
        db.Product.findByPk(req.params.id,{
            include: ["type","image"]
        })
        .then (function (producto) 
            {return res.render('./products/productDetail',{
                styles:['productDetail','forms','create'],
                title: producto.name,
                product: producto,
                id:req.params.id
        })})
        .catch(err => {
            res.redirect("/")
        })
    },

    listMovie: (req,res) => {
        db.Movie.findAll({
            include: ["genre","category","poster","restriction"]
        })
        .then(function(pelicula) {return res.render('./products/listMovie',{
            styles: ['list'],
            title: 'Listado de películas',
            pelicula: pelicula
        })})
        .catch(err => {
            res.send(err)
        })
    
        // res.render('./products/list',{
        // styles:['list'],
        // title: 'Listado items',
        // products: product.all().map(p => Object({...p, createImage: file.search('id',p.createImage)}))
    },

    listOther: (req,res) => {
        db.Product.findAll({
            include: ["image"]
        })
        .then(function(product) {return res.render('./products/listOther',{
            styles: ['list'],
            title: 'Listado de productos',
            other: product
        })})
        .catch(err => {
            res.send(err)
        })
    },

    updateMovie: (req,res) => {
        db.Movie.findByPk(req.params.id,{
            include: ["genre","category","poster","restriction"]
        })
        .then (function (pelicula) 
            {return res.render('./products/edit',{
                styles:['forms','edit'],
                title: "Actualizar " + pelicula.productName,
                products: pelicula,
                id:req.params.id
        })})
        .catch(err => {
            res.redirect("/")
        })
    },

    updateOther: (req,res) => {
        db.Product.findByPk(req.params.id,{
            include: ["type","image"]
        })
        .then (function (product) 
            {return res.render('./products/editOther',{
                styles:['forms','edit','create'],
                title: "Actualizar " + product.name,
                products: product,
                id:req.params.id
        })})
        .catch(err => {
            res.redirect("/")
        })
    },

    updateScreening: (req,res) => {
        db.Screening.findByPk(req.params.id,{
            include: ["language","screen","movie"]
        })
        .then (function (screen) 
            {return res.render('./products/editScreening',{
                styles:['screening','forms','create'],
                title: "Actualizar función",
                screening: screen,
                id:req.params.id
        })})
        .catch(err => {
            res.redirect("/")
        })
    },

    modifyMovie: (req,res) => {
        db.Movie.update({
            productName: req.body.productName,
            genre_id: req.body.genre_id,
            category_id: req.body.category_id,
            productLink: req.body.productLink,
            productDescription: req.body.productDescription,
            restriction_id: req.body.restriction_id
        }, {
            where: {id: req.params.id}
        })
        .then(function () {
            return res.redirect('/products/' + req.params.id)
        })
    },

    modifyOther: (req,res) => {
        db.Product.update({
            name: req.body.name,
            type_id: req.body.type_id,
            description: req.body.description,
            price: req.body.price
        }, {
            where: {id: req.params.id}
        })
        .then(function () {
            return res.redirect('/products/other/' + req.params.id)
        })
    },

    modifyScreening: (req,res) => {
        db.Screening.update({
            hour: req.body.hour,
            day: req.body.day,
            screen_id: req.body.screen_id,
            discount: false,
            language_id: req.body.language_id,
        }, {
            where: {id: req.params.id}
        })
        .then(function () {
            return res.redirect('/')
        })
    },

    deleteOther: (req,res) => {
        db.Product.destroy({
            where: {id: req.body.id}
        })
        .then(function() {return res.redirect("/products/other")})
    },

    deleteScreening: (req,res) => {
        db.MovieScreening.destroy({
                where: {screening_id : req.body.idFunction}
            })
        .then (() => (db.Screening.destroy({
            where: {id : req.body.idFunction}
        })))
        .then (() => {return res.redirect("/products/" + req.params.id)})
        // .then(function(movie) {
        //     let funciones = movie.getScreenings()
        //     let funcionesActivas = Object.values(funciones).filter(funcion => {
        //         funcion.id !== req.body.idFunction})
        //     movie.setScreenings(funcionesActivas)
        // })
        // .then(() => {
        //     db.Screening.destroy({
        //         where: {id: req.body.idFunction}})
        //     })
        // .then(function() {return res.redirect("/products/" + req.params.id)})
        

        // db.Screening.destroy({
        //     where: {id: req.body.id}
        // })
        // .then(function() {return res.redirect("/products/other")})
    },

    deleteMovie: (req,res) => {
        db.MovieScreening.destroy({
                    where: {movie_id: req.body.id}
                })
        .then (() => {db.Movie.destroy({
            where: {id: req.body.id}
            })
        }) 
        .then(function() {return res.redirect("/products/")})
    },

    search: (req,res) => {
        db.Movie.findAll({
            where: { productName: { 
                [Op.like] : "%" + req.body.search + "%"
            }},
            include: ["poster"]
        })
        .then(results => {
            return res.render ('./products/searchResult',{
                results: results,
                styles: ["search"],
                title: 'Resultado de búsqueda'
            })
        })
    },

    // searchResult: (req,res) => res.render('./products/searchResult',{
        
    // }),

}
    
       
        // res.render('./products/productDetail',{
        // styles: ['productDetail'],
        // title: 'Detalle de película'

module.exports = controller
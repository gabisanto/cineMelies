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

    createScreening: (req,res) => {
        //let all = product.all().map(p => Object({...p, createImage: file.search('id',p.createImage)}))
        let resultExists = product.search('id',req.params.id)
        //let result = product.all().map(p => Object({...p, createImage: file.search('id',p.createImage)}))
        //let productDetail = product.all().map(product => Object ({...product,createImage : file.search('id',product.createImage[0]).url})) */      
        return resultExists ? res.render('./products/screening',{
            styles:['screening','forms','create'],
            title: 'Nueva función de ' + req.params.id.productName,
            product: resultExists,
            id:req.params.id            
        }) : res.redirect("/products/")
    },

    saveMovie: (req,res) => {
        db.Poster.create({
            url: req.file.filename
        })
        .then(function (newPoster) {
            db.Movie.create({
                productName: req.body.name,
                genre_id: req.body.genre_id,
                category_id: req.body.category_id,
                productLink: req.body.productLink,
                productDescription: req.body.description,
                image_id: newPoster.id,
                restriction_id: req.body.restriction_id
            })
            .then(function (product) {
                return res.redirect('/products/' + product.id)
        })
        
        })
    },

    saveOther: (req,res) => {
        db.Product.create({
            name: req.body.name,
            type_id: req.body.type_id,
            description: req.body.description,
            image_id: req.body.createImage.id,
            price: req.body.price
        })
        .then(function (newProduct) {
            return res.redirect('/other/' + newProduct.id)
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
            include: ["genre","category","poster","restriction"]
        })
        .then (function (pelicula) 
            {return res.render('./products/movieDetail',{
                styles:['productDetail','forms','create'],
                title: pelicula.productName,
                product: pelicula,
                id:req.params.id
        })})
        .catch(err => {
            res.redirect("/")
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

    update: (req,res) => res.render('./admins/edit',{
        //list: controller.list(),
        styles:['forms','edit'],
        title: 'Actualizar Item',
        products: product.search("id", req.params.id)
    }),
    modify: (req,res) => {
        let updated = product.update(req.params.id, req.body)
        return res.redirect("/products/" + updated.id)
    },

    delete: (req,res) => {
        product.delete(req.body.id)
        return res.redirect("/products/")
    }


    }
       
        // res.render('./products/productDetail',{
        // styles: ['productDetail'],
        // title: 'Detalle de película'

module.exports = controller
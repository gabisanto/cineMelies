const product = require('../models/product.js');
const file = require('../models/file.js');
const db = require('../database/models')

const controller = {


    list: (req,res) => res.render('./products/list',{
        styles:['list'],
        title: 'Listado items',
        products: product.all().map(p => Object({...p, createImage: file.search('id',p.createImage)}))
    }),

    create: (req,res) => res.render('./products/create',{
        styles: ['create','forms'],
        title: 'Crear producto',
    }),

    createScreening: (req,res) => {
        //let all = product.all().map(p => Object({...p, createImage: file.search('id',p.createImage)}))
        let resultExists = product.search('id',req.params.id)
        let result = product.all().map(p => Object({...p, createImage: file.search('id',p.createImage)}))
        //let productDetail = product.all().map(product => Object ({...product,createImage : file.search('id',product.createImage[0]).url})) */      
        return resultExists ? res.render('./products/screening',{
            styles:['screening','forms','create'],
            title: 'Nueva función de ' + result[req.params.id-1].productName,
            product: resultExists,
            id:req.params.id            
        }) : res.redirect("/products/")
    },

    save: (req,res) => {
        //res.send(req.body)
        req.body.files = req.files;
        //req.body.product= req.product;
        let created = product.create(req.body);
        return res.redirect('./' + created.id)
    },

    cart: (req,res) => res.render('./products/carrito',{
        styles: ['carrito'],
        title: 'Proceso de compra'
    }),

    show: (req,res) => {
        //let all = product.all().map(p => Object({...p, createImage: file.search('id',p.createImage)}))
        let resultExists = product.search('id',req.params.id)
        let result = product.all().map(p => Object({...p, createImage: file.search('id',p.createImage)}))
        //let productDetail = product.all().map(product => Object ({...product,createImage : file.search('id',product.createImage[0]).url})) */      
        return resultExists ? res.render('./products/productDetail',{
            styles:['productDetail','forms','create'],
            title: result[req.params.id-1].productName,
            product: result,
            id:req.params.id
        }) : res.redirect("/products/")
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
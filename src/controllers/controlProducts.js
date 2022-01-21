const product = require('../models/product.js');
const file = require('../models/file.js');

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
        let result = product.search('id',req.params.id)
        
        return result ? res.render('./products/productDetail',{
            styles:['productDetail','forms','create'],
            title: result.productName,
            product: result
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
const product = require('../models/product.js');

const controller = {
    create: (req,res) => res.render('./products/create',{
        styles: ['create','forms'],
        title: 'Crear producto',
    }),
     
    save: (req,res) => {
        //return res.send(req.body);
        let created = product.create(req.body);
        return res.send(created)
     
      //res.send(req.body)
    },
    
    list: (req,res) => res.render('./products/list',{
        styles:['list'],
        title: 'Listado items',
        products: product.all()
    }),

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
        }) : res.redirect("/products/")},

    update: (req,res) => res.render('./admins/edit',{
        //list: controller.list(),
        styles:['forms','edit'],
        title: 'Actualizar Item',
        products: product.search("id", req.params.id)
    }),
    modify: (req,res) => {
        let updated = product.update(req.params.id, req.body)
        return res.redirect("/products/")
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
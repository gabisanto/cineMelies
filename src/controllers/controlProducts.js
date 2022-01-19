const product = require('../models/product.js');

const controller = {
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
        }) : null},

    update: (req,res) => res.render('./admins/edit',{
        //list: controller.list(),
        styles:['forms','edit'],
        title: 'Actualizar Item',
        products: product.search("id", req.params.id)
    }),
    modify: (req,res) => {
        let updated = controller.update(req.params.id, req.body)
        return res.redirect("./products/list")
    }

    
    }
    

    
    
        // res.render('./products/productDetail',{
        // styles: ['productDetail'],
        // title: 'Detalle de película'

module.exports = controller
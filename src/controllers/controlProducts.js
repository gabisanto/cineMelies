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
        }) : res.render('error',{
            msg: 'Producto no encontrado'
        })
    }
    
        // res.render('./products/productDetail',{
        // styles: ['productDetail'],
        // title: 'Detalle de película'
    
}

module.exports = controller
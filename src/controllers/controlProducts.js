module.exports = {
    list: (req,res) => res.render('./products/list',{
        styles:['list'],
        title: 'Listado items'
    }),

    cart: (req,res) => res.render('./products/carrito',{
        styles: ['carrito'],
        title: 'Proceso de compra'
    }),

    detail: (req,res) => res.render('./products/productDetail',{
        styles: ['productDetail'],
        title: 'Detalle de película'
    })
}
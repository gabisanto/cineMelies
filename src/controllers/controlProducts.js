module.exports = {
    cart: (req,res) => res.render('./products/carrito',{
        styles: ['carrito'],
        title: 'Proceso de compra'
    }),
    detail: (req,res) => res.render('./products/productDetail',{
        styles: ['productDetail'],
        title: 'Detalle de película'
    }),
    create: (req,res) => res.render('./products/create',{
        styles: ['create','forms'],
        title: 'Crear nuevo item'
    }),
    save: (req,res) => res.send(req.body)
}

const controller = {
    list: (req,res) => res.render('./products/list',{
        styles:['list'],
        title: 'Listado items',
        products: all()
    }),

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
        title: 'Crear producto',
    }),
     
    save: (req,res) => {
        //return res.send(req.body);
        let created = product.create(req.body);
        return res.send(created)
     
      //res.send(req.body)
    },
    
    
}

module.exports = controller


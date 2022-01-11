module.exports = {
    create: (req,res) => res.render('./admins/create',{
        styles: ['create','forms'],
        title: 'Crear nuevo item'
    }),
    edit: (req,res) => res.render('./admins/edit',{
        styles:['edit','forms'],
        title: 'Editar item'
    }),
    list: (req,res) => res.render('./admins/list',{
        styles:['list'],
        title: 'Listado items'
    }),
}
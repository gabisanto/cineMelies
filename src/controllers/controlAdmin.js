module.exports = {
    
    edit: (req,res) => res.render('./admins/edit',{
        styles:['edit','forms'],
        title: 'Editar item'
    }),
    
}
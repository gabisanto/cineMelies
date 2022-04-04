const db = require('../../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    list: (req,res) => {
        db.User.findAll()
        .then((users) => {
            if(users.length > 0) {
                let result ={
                    meta: {
                        status: 200,
                        count:  users.length,
                        url: 'api/users'
                    },
                    data: []
            }
            users.forEach(user =>{
                result.data.push({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                   // detailAvatar:"http://localhost:3001/uploads/avatars/" + user.avatar_id.url
                    detailUser: "http://localhost:3001/api/users" + `/api/users/${user.id}`,
                })
            });

           return res.json(result)
            
        } else{
            return res.status(404).json( {
                error: 'No results found'} );
        }
    })
        .catch(err => {
            return res.status(500).json( {
                error: 'Could not connect to database' } );;
                 })   
    },

    userId:(req,res) =>{
        db.User.findByPk(req.params.id)
        .then((user) => {
            return res.status(200).json({
                data: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        admin : user.admin,
                        //avatarUrl: "http://localhost:3001/uploads/avatars/" + user.avatars.Url, ("Falta Url imagen en detalle de Usuario")
                        detailUser: "http://localhost:3001/api/users" + `/api/users/${user.id}`,
                    },
                     status: 200,
            })   
          })
         }
         
        
    }
    

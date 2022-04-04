const db = require('../../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    listMovie: (req,res) => {
        db.Movie.findAll({
            include: ["genre","category","poster","restriction",{model: db.Screening, as: "screenings",include:["language", "screen"]}]
        })
        .then((movies) => {
            if(movies.length > 0) {
                let result ={
                    meta: {
                        status: 200,
                        count:  movies.length,
                        url: '/api/products/movies'
                    },
                    data: [],
            }
            movies.forEach(movie =>{
                result.data.push({
                    id: movie.id,
                    name: movie.productName,
                    description: movie.productDescription,
                    screenings: movie.screenings.map(function(scr) {
                        return {hour: scr.hour, day: scr.day,screen: scr.screen.name,language:scr.language.name}
                    })
                    ,
                    detailmovie: "http://localhost:3001" + `/api/products/movies/${movie.id}`,
                })
            });

           return res.json(result)
            
        } else{
            return res.status(404).json( {
                error: 'No hay resultados'} );
        }
    })
        .catch(err => {
            return res.status(500).json( {
                error: 'Could not connect to database' } );;
                 })   
    },

    movieId:(req,res) =>{
        db.Movie.findByPk(req.params.id,{
            include: ["genre","category","poster","restriction",{model: db.Screening, as: "screenings",include:["language", "screen"]}]
        })
        .then((movie) => {
            return res.status(200).json({
                data: {
                        id: movie.id,
                        name: movie.productName,
                        description: movie.productDescription,
                        category: movie.category.name,
                        genre: movie.genre.name,
                        restriction: movie.restriction.name,
                        trailer: movie.productLink,
                        poster: "http://localhost:3001/uploads/" + movie.poster.url,
                    },
                     status: 200,
            })   
            })
         },
    
         listOther: (req,res) => {
            db.Product.findAll({
                include: ["type","image"]
            })
            .then((products) => {
                if(products.length > 0) {
                    let result ={
                        meta: {
                            status: 200,
                            count:  products.length,
                            url: '/api/products/other'
                        },
                        data: [],
                }
                products.forEach(product =>{
                    result.data.push({
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        detailproduct: "http://localhost:3001" + `/api/products/other/${product.id}`,
                    })
                });
    
               return res.json(result)
                
            } else{
                return res.status(404).json( {
                    error: 'No hay resultados'} );
            }
        })
            .catch(err => {
                return res.status(500).json( {
                    error: 'Could not connect to database' } );;
                     })   
        },    

        
        OtherId:(req,res) =>{
            db.Product.findByPk(req.params.id,{
                include: ["type","image"]
            })
            .then((product) => {
                return res.status(200).json({
                    data: {
                            id: product.id,
                            name: product.name,
                            description: product.description,
                            type: product.type.name,
                            price: product.price,
                            image: "http://localhost:3001/uploads/" + product.image.url,
                        },
                         status: 200,
                })   
                })
                .catch(err => {
                    return res.status(404).json( {
                        error: 'Product does not exist' } );;
                         })   
             },

    }
    

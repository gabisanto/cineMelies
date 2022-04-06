import React, {Component} from 'react';

class MovieLatest extends Component {
    constructor (props) {
        super(props)
        this.state = {
            latestMovie: null
        }
    }

    componentDidMount(){
        fetch(`http://localhost:3001/api/products/movies/latest`)
        .then(res => res.json())
        .then(results => {
            this.setState({latestMovie:results.data})
        })
        .catch(err => console.log(err))
    }
    
    componentDidUpdate(){
        console.log('Actualizado')
    }

    render(){
        console.log('latest',this.state.latestMovie)
        return(
            <ul>
                <li>Titulo</li>
                <li>Categoría</li>
                <li>Descripción</li>
            </ul>
        )
    }
    // return (
    //     <div>
    //         <h2 className="title">Última película creada</h2>
    //         <ul>
    //             <li>{moviesLatest.title}</li>
    //             <li>{moviesLatest.description}</li>
    //             <li>{moviesLatest.trailer}</li>
    //             <li>{moviesLatest.category}</li>
    //         </ul>
    //     </div>
    // );
}

export default MovieLatest
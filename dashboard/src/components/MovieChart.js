import React,{Component} from 'react';
// import MovieChartRow from './MovieChartRow';

class MovieChart extends Component {
    constructor (props) {
        super(props)
        this.state = {
            movies: null
        }
    }

    componentDidMount(){
        fetch(`http://localhost:3001/api/products/movies`)
        .then(res => res.json())
        .then(data => {
            this.setState({movies:data.results})
        })
        .catch(err => console.log(err))
    }

    componentDidUpdate(){
        console.log('Actualizado')
    }


    render() {
        console.log('peliculas',this.state.movies)
        return (
            /* <!-- DataTales Example --> */
            <div className="card shadow mb-4">
                
                {/* <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Título</th>
                                    <th>Descripción</th>
                                    <th>Detalle</th>
                                    
                                    
                                </tr>
                            </thead>
                            
                            <tbody>
                                {
                                this.state.movies && this.state.movies.map((movie) => {
                                    return <MovieChartRow movie/>
                                })
                                }
    
                            </tbody>
                        </table>
                    </div>
                </div> */}
            </div>
    
        )
    }
}



export default MovieChart;
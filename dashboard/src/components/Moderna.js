import React, {Component } from 'react';

class Movies extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
          };
    }
    componentDidMount(){
        
        fetch("http://localhost:3001/api/products/movies/moderna" )
                .then(res => res.json())
                .then(data => {
                        
                        this.setState(
                            {
                                count: data.meta.count,
                                                    
                            }
                        )})

                .catch(error => console.log(error));
        
    }

    
    render () {
        return (

            <>
                <div className="col-md-4 mb-4">
                    <div className="card border-left-danger shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">Películas modernas</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.count}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-user-astronaut fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Movies;
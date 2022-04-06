import React, {Component} from 'react';
import MovieLatest from './MovieLatest';
import MoviesCategory from './MoviesCategory';

class MiddleMovieRow extends Component{
    render(){
        return (
            <div className="row">
                
                
                <MovieLatest />
                <MoviesCategory />
    
            </div>
        )
    }
    
}

export default MiddleMovieRow;
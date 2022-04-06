import React from 'react';
import MovieLatest from './MovieLatest';
import MoviesCategory from './MoviesCategory';

function ContentRowCenter(){
    return (
        <div className="row">
            
            
            <MovieLatest />
            <MoviesCategory />

        </div>
    )
}

export default ContentRowCenter;
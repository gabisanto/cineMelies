import React from 'react';
import MovieLatest from './MovieLatest';
import MovieCategories from './MovieCategories';

function ContentRowCenter(){
    return (
        <div className="row">
            
           
            <MovieLatest title="Última película" />
           
            <MovieCategories />

        </div>
    )
}

export default ContentRowCenter;
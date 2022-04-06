import React from 'react';
import MovieLatest from './MovieLatest';
import MoviesCategory from './MoviesCategory';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <MovieLatest />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <MoviesCategory />

        </div>
    )
}

export default ContentRowCenter;
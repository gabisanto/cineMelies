import React from 'react';
// import image from '../assets/images/logo-DH.png';
import MoviesWrapper from './MoviesWrapper';
// import GenresInDb from './GenresInDb';
// import LastMovieInDb from './LastMovieInDb';
// import ContentRowMovies from './ContentRowMovies';
// import NotFound from './NotFound';
// import {Link, Route, Switch} from 'react-router-dom';

function SideBarComplete(){
    return(
        <React.Fragment>

            
                
                    <MoviesWrapper />
                
                {/* <Route path="/GenresInDb">
                    <GenresInDb />
                </Route>
                <Route path="/LastMovieInDb">
                    <LastMovieInDb />
                </Route>
                <Route path="/ContentRowMovies">
                    <ContentRowMovies />
                </Route>
                <Route component={NotFound} /> */}
            
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBarComplete;
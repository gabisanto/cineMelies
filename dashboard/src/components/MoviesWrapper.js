import React from 'react';
import MiddleMovieRow from './MiddleMovieRow';
import TotalRows from './TotalRows';
import MovieChart from './MovieChart';
import Moderna from './Moderna';
import Clasica from './Clasica';

function MoviesWrapper(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					
				
					{/*<!-- Content Row Movies-->*/}
					<TotalRows />
					<Moderna />
					<Clasica />
					<MiddleMovieRow />
					<MovieChart />
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default MoviesWrapper;
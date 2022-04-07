import React from 'react';
import MiddleMovieRow from './MiddleMovieRow';
import TotalRows from './TotalRows';
import MovieChart from './MovieChart';



function MoviesWrapper(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Películas</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<TotalRows />
					<MiddleMovieRow />
					<MovieChart />
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default MoviesWrapper;
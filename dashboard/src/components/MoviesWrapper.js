import React from 'react';
import TotalRows from './TotalRows';
// import MovieChart from './MovieChart';
import Moderna from './Moderna';
import Clasica from './Clasica';
import MovieCard from './MovieCard';
import TableTest from './TableTest';

function MoviesWrapper(){
    return(
        <React.Fragment>
				
				<div className="container-fluid">
					
				
					<div className="flex">
					<TotalRows />
					<Moderna />
					<Clasica />
					</div>
					
					<div className="middleCard">
					<MovieCard/>
					</div>
					
					
					<div className="middleCard">
					<TableTest />
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default MoviesWrapper;
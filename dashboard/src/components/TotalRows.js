import React from 'react';
import TotalMovieCards from './TotalMovieCards';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesTotal = {
    title: 'Total de películas',
     
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let moviesScreening = {
    title:'En cartelera', 
     
    cuantity: '8',
    icon:'fa-award'
}


let cartProps = [moviesTotal, moviesScreening];

function ContentRowMovies(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <TotalMovieCards {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;
import React from 'react';
import {useState,useEffect,Fragment} from 'react'

function ContentRowMovies(){
    const [movies,setMovies] = useState([]);
   
    useEffect(() => {
        fetch('http://localhost:3001/api/products/movies/')
        .then(res => res.json())
        .then(results => setMovies(results.meta))        
        console.log('Inicia')
    },[])

    useEffect(() => {
        fetch('http://localhost:3001/api/products/movies/')
        .then(res => res.json())
        .then(results => setMovies(results.meta))        
        console.log('Actualiza')
    },[])

    

    return (
    
        <div className="row">
            
            
            <h2>Total de películas: {movies.count} </h2>
            
                
        

        </div>
    )
}

export default ContentRowMovies;
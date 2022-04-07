import {useState,useEffect,Fragment} from 'react'


function MovieCategories ({title}){
  
  const [movies,setMovies] = useState([]);
   
    useEffect(() => {
        fetch('http://localhost:3001/api/products/movies/')
        .then(res => res.json())
        .then( results => setMovies(results.data))        
        console.log('Inicia')
    },[])

    useEffect(() => {
        fetch('http://localhost:3001/api/products/movies/')
        .then(res => res.json())
        .then(results => setMovies(results.data))        
        console.log('Actualiza')
    },[])

    let clasica = movies.filter(movie => movie.category === "Clásica").length
    let moderna = movies.filter(movie => movie.category === "Moderna").length
    let estrenos = movies.filter(movie => movie.category === "Estreno").length

    return (
       
     <section>
         <h2>Categorías</h2>
        
        <ul>
        <li>Clásica: {clasica}</li>
        <li>Moderna: {moderna}</li> 
         <li>Estrenos: {estrenos}</li>    
              
           
       </ul> 
     </section>

        
             
       
    

    )
 }

       


export default MovieCategories;
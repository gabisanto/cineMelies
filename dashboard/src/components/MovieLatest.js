import {useState,useEffect,Fragment} from 'react'


function MovieLatest ({title}){
  
  const [latest,setLatest] = useState([]);
   
    useEffect(() => {
        fetch('http://localhost:3001/api/products/movies/latest/')
        .then(res => res.json())
        .then(data => setLatest(data.data))        
        console.log('Inicia')
    },[])

    useEffect(() => {
        fetch('http://localhost:3001/api/products/movies/latest/')
        .then(res => res.json())
        .then(data => setLatest(data.data))        
        console.log('Actualiza')
    },[])

    return (
       
         <Fragment>

        <h2>{title}</h2>

       <ul>
                       
             <p> {latest.id} </p>
             <p> {latest.name} </p>
             <p> {latest.genre} </p>
             <p> {latest.description} </p>
             <p> {latest.restriction} </p>
             
             <img src={latest.poster} width= {150} alt={latest.name} />
          
      </ul> 
             
        </Fragment> 
    

    )
 }

       


export default MovieLatest;
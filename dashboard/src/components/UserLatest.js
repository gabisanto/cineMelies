import {useState,useEffect,Fragment} from 'react'


function UserLatest ({title}){
  
    const [latest,setLatest] = useState([]);
     
      useEffect(() => {
          fetch('http://localhost:3001/api/users/latest/')
          .then(res => res.json())
          .then(data => setLatest(data.data))        
          console.log('Inicia')
      },[])
  
      useEffect(() => {
          fetch('http://localhost:3001/api/users/latest/')
          .then(res => res.json())
          .then(data => setLatest(data.data))        
          console.log('Actualiza')
      },[])
  
      return (
         
           <Fragment>
  
          <h2>Último usuario creado</h2>
  
         <ul>
                         
               <p> {latest.id} </p>
               <p> {latest.name} </p>
               <p> {latest.email} </p>
                             
               <img src={latest.avatar} width= {150} alt={latest.name} />
            
        </ul> 
               
          </Fragment> 
      
  
      )
   }
  
         
  
  
  export default UserLatest;
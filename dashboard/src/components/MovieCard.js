import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState,useEffect} from 'react'

export default function ImgMediaCard() {
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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={latest.name}
        height="140"
        image={latest.poster}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Última película creada: {latest.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {latest.description}
        </Typography>
      </CardContent>
      
    </Card>
  );
}

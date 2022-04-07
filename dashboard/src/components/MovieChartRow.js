import React from 'react';


function MovieChartRow(props){
    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                    <td><a href={props.detailmovie}>{props.detailmovie}</a></td>
                    
                </tr>
            )
    }
    
        

export default MovieChartRow;
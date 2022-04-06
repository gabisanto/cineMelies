import React from 'react';


function MovieChartRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                    <td>{props.detailmovie}</td>
                    
                </tr>
            )
    }
    
        

export default MovieChartRow;
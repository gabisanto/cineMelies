import React from 'react';


function UserChartRow(props){
    return (
                <tr>
                    <td>{props.id}</td>
                    
                    <td>{props.name}</td>
                    <td>{props.email}</td>
                    <td>{props.detailuser}</td>
                    
                </tr>
            )
    }
    
        

export default UserChartRow;
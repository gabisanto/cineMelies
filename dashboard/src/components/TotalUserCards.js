import React from 'react';


function TotalUsersCards(props){
    return(
        <div className="col-md-4 mb-4">
            <div >
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div> {props.title}</div>
                            <div>{props.cuantity}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas ${props.icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}


export default TotalUsersCards;
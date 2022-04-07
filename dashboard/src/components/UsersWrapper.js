import React from 'react';
import UserLatest from './UserLatest';
import TotalUserRows from './TotalUserRows';
import UserChart from './UserChart';


function UsersWrapper(){
    return(
        <React.Fragment>
				
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Usuarios</h1>
					</div>
				
					
					<TotalUserRows />
					
					<UserLatest />
					<UserChart />
	
				</div>
			

        </React.Fragment>
    )

}
export default UsersWrapper;
import React from 'react';
import UserLatest from './UserLatest';
import TotalUserRows from './TotalUserRows';
import UserChart from './UserChart';


function UsersWrapper(){
    return(
        <React.Fragment>
				
				<div className="container-fluid">
					
				
					
					<TotalUserRows />
					
					<UserLatest />
					<UserChart />
	
				</div>
			

        </React.Fragment>
    )

}
export default UsersWrapper;
import React from 'react';
import UserCard from './UserCard';
import TotalUserRows from './TotalUserRows';
import TableTestUsers from './TableTestUsers';


function UsersWrapper(){
    return(
        <React.Fragment>
				
				<div className="container-fluid">
					
				
					<div className="middleTotal">
					<TotalUserRows />
					</div>
					
					<div className="middleCard">
					<UserCard />
					</div>
					
					<div className="middleCard">
					<TableTestUsers />
					</div>
	
				</div>
			

        </React.Fragment>
    )

}
export default UsersWrapper;
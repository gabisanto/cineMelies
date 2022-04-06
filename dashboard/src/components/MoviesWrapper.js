import React from 'react';

import MoviesContent from './MoviesContent';

function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                   
                    <MoviesContent />
                   
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;
import React from 'react';

class MiddleUserRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
          };
    }
    componentDidMount(){
        
        fetch(`http://localhost:3001/api/users`)
                .then(res => res.json())
                .then(data => {
                        
                        this.setState(
                            {
                                users: data.meta.users,
                                                    
                            }
                        )})

                .catch(error => console.log(error));
        
    }

    componentDidUpdate(){
        console.log('Actualizado')
    }

    render () {
        return 
    }
}

export default MiddleUserRow;

import React,{Component} from 'react';
import UserChartRow from './UserChartRow';

class userChart extends Component {
    constructor (props) {
        super(props)
        this.state = {
            users: null
        }
    }

    componentDidMount(){
        fetch(`http://localhost:3001/api/users`)
        .then(res => res.json())
        .then(results => {
            this.setState({users:results.data})
        })
        .catch(err => console.log(err))
    }
    
    componentDidUpdate(){
        console.log('Actualizado')
    }


    render() {
        console.log('users',this.state.users)
        return (
            /* <!-- DataTales Example --> */
            <div className="card shadow mb-4">
                
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                <th>ID</th>
                                
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Detalle</th>
                                    
                                    
                                </tr>
                            </thead>
                            
                            <tbody>
                                {
                                this.state.users && this.state.users.map((user) => {
                                    return <UserChartRow id={user.id}  name={user.name} email={user.email} detailuser={user.detailUser}/>
                                })
                                }
    
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    
        )
    }
}



export default userChart;
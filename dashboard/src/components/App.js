import React, {Component} from 'react';

import Testy from './testy';

class App extends Component{
  constructor (props) {
    super(props);
      this.state = {
        movies: null,
        latestMovie:null,
        users:null,
        latestUser:null

    }
  }

  componentDidMount(){
    Promise.all([
      fetch(`http://localhost:3001/api/products/movies`).then(result => result.json()),
      fetch(`http://localhost:3001/api/products/movies/latest`).then(result => result.json()),
      fetch(`http://localhost:3001/api/users`).then(result => result.json()),
      fetch(`http://localhost:3001/api/users/latest`).then(result => result.json()),
    ])
    .then(results => {
        this.setState({movies:results[0].data,latestMovie:results[1].data,users:results[2].data,latestUser:results[3].data})
    })
    .catch(err => console.log(err))
}

componentDidUpdate(){
    console.log('Actualizado')
}


render() {
  
  return (
 
    <React.Fragment>
        <Testy />
      	<div id="wrapper">
        
       
        </div>
    </React.Fragment>

  );
}

}

export default App;

import React, {Component} from 'react';
import SideBarComplete from './SideBarComplete';


class App extends Component{
  constructor (props) {
    super(props);
      this.state = {
        movies: null
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3001/api/products/movies`)
    .then(res => res.json())
    .then(results => {
        this.setState({movies:results.data})
    })
    .catch(err => console.log(err))
}

componentDidUpdate(){
    console.log('Actualizado')
}


render() {
  
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBarComplete />
        </div>
    </React.Fragment>
  );
}

}

export default App;

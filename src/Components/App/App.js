import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Begin from '../Begin/Begin';
import Options from '../../Containers/Options/Options';
import Main from '../../Containers/Main/Main';
// import logo from '../logo.svg';
const API_KEY =`${process.env.REACT_APP_NEWYORKTIMES_API_KEY}`


class App extends Component{
  constructor() {
    super() 
    this.state = {
      begin: false
    }
  }

  // async componentDidMount() {
  
  //   let url = `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${API_KEY}`
  //   let response = await fetch(url)
  //   if(!response.ok){
  //     throw Error('Error retrieving data')
  //   }
  
  //   let me = await response.json()
  //   console.log(me.results[0])

  // }

  pageSetup = () => {
    this.setState({ begin  : !this.state.begin})
  }
  
  render() {
    let { begin } = this.state

    return (
      <div className="App">
      {(begin) ? <Begin pageSetup={this.pageSetup}/> : 
      <Switch>
        <Route path="/" component={Options}/>
        {/* <Route path="/" component={Main}/> */}
      </Switch>
    }
      </div>
  );
}
}

export default App;

// <header className="App-header">
  {/* <img src={logo} className="App-logo" alt="logo"> */}
{/* </header> */}
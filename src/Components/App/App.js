import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Begin from '../Begin/Begin'
import Main from '../../Containers/Main/Main';
// import logo from '../logo.svg';
const API_KEY =`${process.env.REACT_APP_NEWYORKTIMES_API_KEY}`


class App extends Component{
  constructor() {
    super() 
    this.state = {
      begin: true
    }
  }

  async componentDidMount() {
  
    let url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`
    let response = await fetch(url)
    if(!response.ok){
      throw Error('Error retrieving data')
    }
  
    let me = await response.json()
    console.log(me)

  }
  
  render() {
    let { begin } = this.state

    return (
      <div className="App">
      {(begin) ? <Begin /> : 
      <Switch>
        <Route path="/" component={Main}/>
        {/* <Route path="/single" */}
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
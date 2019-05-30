import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  async componentDidMount() {
    
    let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${process.env.REACT_APP_NEWYORKTIMES_API_KEY}`
    let response = await fetch(url)
    if(!response.ok){
      throw Error('Error retrieving data')
    }
  
    return console.log(await response.json());

  }
  
  render() {

    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;

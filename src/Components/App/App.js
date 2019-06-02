import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Begin from '../Begin/Begin';
import Options from '../../Containers/Options/Options';
import Main from '../../Containers/Main/Main';
import Error from  '../Error/Error';


class App extends Component{
  constructor() {
    super() 
    this.state = {
      begin: false
    }
  }


  pageSetup = () => {
    this.setState({ begin  : !this.state.begin})
  }
  
  render() {
    let { begin } = this.state

    return (
      <div className="App">
      {(!begin) ? <Begin path="" pageSetup={this.pageSetup}/> : 
      <Switch>
        <Route exact path="/" component={Options}/>
        <Route path="/main" component={Main}/>
        <Route component={Error}/>
      </Switch>
    }
      </div>
  );
}
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Begin from '../Begin/Begin';
import Options from '../../Containers/Options/Options';
import Main from '../../Containers/Main/Main';
import Error from  '../Error/Error';


export const App = () => { 

    return (
      <div className="App">
      <Switch>
        <Route exact path="/" component={Begin}/>
        <Route exact path="/Options" component={Options}/>
        <Route path="/Main" component={Main}/>
        <Route component={Error}/>
      </Switch>
      </div>
  );
}


export default App;

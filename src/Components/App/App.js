import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Begin from '../Begin/Begin';
import Options from '../../Containers/Options/Options';
import Main from '../../Containers/Main/Main';
import Error from  '../Error/Error';


const App = () => { 

    return (
      <div className="App">
      <Switch>
        {/* {this.props.isLoadi} */}
        <Route exact path="/" component={Begin}/>
        <Route exact path="/Options" component={Options}/>
        <Route path="/Main" component={Main}/>
        {/*not sure if im rending a book component*/}  
        {/* <Route path="/main/books" component={Books}/> */}
        <Route component={Error}/>
      </Switch>
      </div>
  );
}


export default App;

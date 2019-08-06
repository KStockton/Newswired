import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Begin from '../Begin/Begin';
import Options from '../../Containers/Options/Options';
import Main from '../../Containers/Main/Main';
import Error from  '../Error/Error';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Item from './../Item/Item';

export const App = (props) => { 
  
  const {allBooks, allTravel, allTopNews, allSports} =props;

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Begin}/>
        <Route path='/Newswired' render={() => <Redirect to="/"/>} />
        <Route exact path="/Options" component={Options}/>
        <Route path="/Main" component={Main}/>
        <Route path='/card/:id' render={({ match }) => {
          const allCards = [...allBooks, ...allTravel, ...allTopNews, ...allSports];
          const item = allCards.find(item => (item.id === match.params.id));
          if (!item){
            return <Route component={Error}/>;
          } else {
            return <Item match={match} {...item }/>;
          }
        }}/>
        <Route component={Error}/>
      </Switch>
    </div>
  );
};

App.propTypes = {
  allSports: PropTypes.array,
  allBooks: PropTypes.array,
  allTravel: PropTypes.array,
  allTopNews: PropTypes.array
};

export const mapStateToProps = (state) => ({
  allBooks: state.allBooks,
  allTravel: state.allTravel,
  allSports: state.allSports,
  allTopNews: state.allTopNews
});


export default connect(mapStateToProps, null)(App);

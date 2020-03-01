import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import User from './components/users/users.component';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>

          {/**
           * 1.) All Switchable routes will be inside the switch
           * 2.) Navbar or header should be outside the switch as it will always exist in every page.
           */}
          <Switch>
            <Route exact path="/" component={User}/>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;

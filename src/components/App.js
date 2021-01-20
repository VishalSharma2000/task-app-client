import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './forms/Login';
import Error from './Error';
import Signup from './forms/Signup';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
};

export default App;
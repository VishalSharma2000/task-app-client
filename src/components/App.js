import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserProvider } from '../components/context/UserContext';
import PrivateRoute from '../components/PrivateRoute';

import Login from './forms/Login';
import Error from './Error';
import Signup from './forms/Signup';
import ForgotPassword from './forms/ForgotPassword';
import Home from '../components/User/Home';

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/reset-password" component={ForgotPassword} />

          <PrivateRoute exact path="/" component={Home} />

          <Route path="*" component={Error} />
        </Switch>
      </UserProvider>
    </Router>
  );
};

export default App;
import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { UserContext, UserProvider } from '../components/context/UserContext';
import PrivateRoute from '../components/PrivateRoute';

import Login from './forms/Login';
import Error from './Error';
import Signup from './forms/Signup';
import ForgotPassword from './forms/ForgotPassword';
import Home from '../components/User/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <UserProvider>
          <Route exact path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/reset-password" component={ForgotPassword} />

          <PrivateRoute path="/" component={Home} />

          {/* <Route path="*" component={Error} /> */}
        </UserProvider>
      </Switch>
    </Router>
  );
};

export default App;
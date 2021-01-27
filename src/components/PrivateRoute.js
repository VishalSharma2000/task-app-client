import React, { useContext } from 'react';
import { UserContext } from '../components/context/UserContext';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...options}) => {
  const { currentUser } = useContext(UserContext);
  console.log('Current User', currentUser);

  return (
    <Route 
      {...options}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }}
    />
  );
};

export default PrivateRoute;
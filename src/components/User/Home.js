import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

import { Link } from 'react-router-dom';

const Home = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  console.log(currentUser);

  return (
    <div>
      <h1>Home Page</h1>

      <div>
        <p>Name: {currentUser.user.name}</p>
        <p>Email: {currentUser.user.email}</p>
      </div>

      <Link to="/login" onClick={() => {
        window.localStorage.removeItem('user')
      }}>Logout</Link>
    </div>
  );
};

export default Home;
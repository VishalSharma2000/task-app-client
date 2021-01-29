import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

import Navbar from '../Navbar/Navbar';

const Home = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  return (
    <div>
      <Navbar />
      <div>This is home page</div>
    </div>
  );
};

export default Home;
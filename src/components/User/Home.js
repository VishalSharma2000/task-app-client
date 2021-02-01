import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';

import { fetchAllTasks } from '../../services/user/task';
import Navbar from '../Navbar/Navbar';
import './Home.css';

const Home = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await fetchAllTasks();

      setAllTasks(data);
    };

    fetchTasks();
  }, []);

  console.log('All Tasks', allTasks);

  return (
    <div>
      <Navbar />

      <div className="main-content">
        <div
          className="greet"
        >{`Hello ${currentUser.user.name}`}</div>
      </div>
    </div>
  );
};

export default Home;
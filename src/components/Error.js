import React, { useState, useEffect } from 'react';
import { getTasks } from '../services/user/auth';

const Error = () => {
  const [allTasks, setAllTasks] = useState([]);

  // useEffect(() => {
    
  // }, []);

  return (
    <div>Page not found</div>
  );
};

export default Error;
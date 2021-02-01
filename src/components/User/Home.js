import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';

import Task from '../Task/Task';
import { fetchAllTasks, addNewTask } from '../../services/user/task';
import Navbar from '../Navbar/Navbar';
import './Home.css';

const Home = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [allTasks, setAllTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await fetchAllTasks();

      setAllTasks(data);
    };

    fetchTasks();
  }, []);

  const onClickAddTask = () => {

  };

  return (
    <div>
      <Navbar />

      <div className="main-content">
        {/* Rendering all tasks of the user */}
        {allTasks.map((task, index) => (
          <Task
            task={task}
            key={index}
          />
        ))}
      </div>

      {/* Add New Task */}
      <div className="new-task">
        <div className="new-task-inputs">
          <input
            type="text"
            value={newTask.title}
            placeholder="Title"
            onChange={e => setNewTask({ ...newTask, title: e.target.value })}
          />

          <textarea
            placeholder="Task Description"
            onChange={e => setNewTask({ ...newTask, description: e.target.value })}
          >{newTask.description}</textarea>
        </div>

        <button
          onClick={onClickAddTask}
        >Save</button>
      </div>
    </div>
  );
};

export default Home;
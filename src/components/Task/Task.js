import React from 'react';

import './Task.css';

const Task = props => {
  const { task = {} } = props;

  return (
    <div className="task">
      <input
        type="checkbox"
        className="task-checkbox"
        onClick={() => { }}
        checked={task.completed}
      />

      <div className="task-content">
        <h4 className="task-title">{task.title}</h4>
        <p className="task-description">{task.description}</p>
      </div>

      <span className="cancel-task">x</span>
    </div>
  );
};

export default Task;
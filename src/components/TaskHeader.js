import React from 'react';

function TaskHeader({ taskCount, onAddTask, onRefresh }) {
  return (
    <header>
      <h1>Tasks ({taskCount})</h1>
      <button onClick={onAddTask}>New Task</button>
      <button onClick={onRefresh}>Refresh</button>
    </header>
  );
}

export default TaskHeader;

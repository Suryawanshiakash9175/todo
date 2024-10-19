import React, { useState } from 'react';
import TaskHeader from './components/TaskHeader';
import TaskList from './components/TaskList';
import NewTaskModal from './components/NewTaskModal';
import EditTaskModal from './components/EditTaskModal';
import DeleteTaskModal from './components/DeleteTaskModal';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);
  const [showDeleteTaskModal, setShowDeleteTaskModal] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  
  // Add Task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Edit Task
  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  // Delete Task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="App">
      <TaskHeader taskCount={tasks.length} onAddTask={() => setShowNewTaskModal(true)} onRefresh={() => window.location.reload()} />
      <TaskList tasks={tasks} 
        onEditTask={(task) => { setCurrentTask(task); setShowEditTaskModal(true); }} 
        onDeleteTask={(task) => { setCurrentTask(task); setShowDeleteTaskModal(true); }}
      />
      <NewTaskModal show={showNewTaskModal} onHide={() => setShowNewTaskModal(false)} onAddTask={addTask} />
      {currentTask && <EditTaskModal show={showEditTaskModal} task={currentTask} onHide={() => setShowEditTaskModal(false)} onEditTask={editTask} />}
      {currentTask && <DeleteTaskModal show={showDeleteTaskModal} task={currentTask} onHide={() => setShowDeleteTaskModal(false)} onDeleteTask={deleteTask} />}
    </div>
  );
}

export default App;

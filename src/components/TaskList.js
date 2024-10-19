import React, { useState } from 'react';

function TaskList({ tasks, onEditTask, onDeleteTask }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;  // Adjust this to control how many tasks per page

  // Filter tasks based on search input
  const filteredTasks = tasks.filter(task => task.name.toLowerCase().includes(searchTerm.toLowerCase()));

  // Get the tasks for the current page
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  // Calculate total pages
  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search tasks" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />

      <ul>
        {currentTasks.map(task => (
          <li key={task.id}>
            {task.name}
            <select onChange={(e) => {
              if (e.target.value === 'edit') {
                onEditTask(task);
              } else if (e.target.value === 'delete') {
                onDeleteTask(task);
              }
            }}>
              <option value="">Options</option>
              <option value="edit">Edit</option>
              <option value="delete">Delete</option>
            </select>
          </li>
        ))}
      </ul>

      {/* Pagination controls */}
      <div className="pagination">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button 
            key={index + 1} 
            onClick={() => paginate(index + 1)} 
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default TaskList;

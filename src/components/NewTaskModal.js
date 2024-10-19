import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function NewTaskModal({ show, onHide, onAddTask }) {
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    onAddTask({ id: Date.now(), name: taskName });
    setTaskName('');
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input 
          type="text" 
          placeholder="Task Name" 
          value={taskName} 
          onChange={(e) => setTaskName(e.target.value)} 
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleAddTask}>
          Add Task
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewTaskModal;

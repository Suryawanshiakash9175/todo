import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function EditTaskModal({ show, onHide, task, onEditTask }) {
  const [taskName, setTaskName] = useState(task.name);

  const handleEditTask = () => {
    onEditTask({ ...task, name: taskName });
    onHide();  // Close the modal after editing
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
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
        <Button variant="primary" onClick={handleEditTask}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditTaskModal;

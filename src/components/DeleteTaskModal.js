import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function DeleteTaskModal({ show, onHide, task, onDeleteTask }) {

  const handleDeleteTask = () => {
    onDeleteTask(task.id);  // Trigger task deletion
    onHide();  // Close the modal after deletion
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete the task: <strong>{task.name}</strong>?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDeleteTask}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteTaskModal;

import React from "react";
import "./TaskViewModal.css";

const TaskViewModal = ({ task, onClose }) => (
  <div className="modal-backdrop" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-modal" onClick={onClose}>
        X
      </button>
      <h2>{task.name}</h2>
      <p>
        <strong>Created by:</strong> {task.creator}
      </p>
      <p>{task.description}</p>
    </div>
  </div>
);

export default TaskViewModal;

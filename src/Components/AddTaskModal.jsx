import React, { useState } from "react";
import "./AddTaskModal.css";

const AddTaskModal = ({ onAdd, onClose }) => {
  const [newTask, setNewTask] = useState({
    name: "",
    description: "",
    creator: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    onAdd(newTask);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <input name="name" placeholder="Task Name" onChange={handleChange} />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <input name="creator" placeholder="Creator" onChange={handleChange} />
        <button onClick={handleAdd}>Add Task</button>
      </div>
    </div>
  );
};

export default AddTaskModal;

import { useState, useEffect } from "react";

const TaskModal = ({ task, onClose, onAdd, isEdit }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    creator: "",
    isCompleted: false,
  });

  // Simula un desplazamiento hacia la posición actual del usuario
  useEffect(() => {
    // Guarda el desplazamiento actual del usuario
    const scrollY = window.scrollY;
    // Ajusta la posición del modal para que esté cerca del usuario
    window.scrollTo({
      top: scrollY,
      behavior: "smooth",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...formData, id: task ? task.id : Date.now().toString() });
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>
          ×
        </button>
        <h2 className="modal-title">{isEdit ? "Edit Task" : "Add Task"}</h2>
        <form onSubmit={handleSubmit} className="form-container">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Task name"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            required
          />
          <input
            type="text"
            name="creator"
            value={formData.creator}
            onChange={handleChange}
            placeholder="Creator"
            required
          />
          <button type="submit" className="submit-task-btn">
            {isEdit ? "Save changes" : "Add task"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;

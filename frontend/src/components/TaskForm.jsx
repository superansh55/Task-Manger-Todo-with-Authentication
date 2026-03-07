import { useState, useEffect } from "react";
import { useTaskContext } from "../hooks/useTasksContext";
import { useAuthContext } from "../hooks/useAuthContext";

const TaskForm = ({ onClose, taskToEdit, onUpdate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useTaskContext();
  const { user } = useAuthContext();

  const isEditing = !!taskToEdit;

  // Pre-fill form when editing
  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setDate(taskToEdit.date.split("T")[0]); // Format date for input field
    } else {
      // Reset form when not editing
      setTitle("");
      setDescription("");
      setDate("");
    }
  }, [taskToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    if (!title.trim() || !date) {
      setError("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    const task = { title: title.trim(), description: description.trim(), date };

    if (isEditing) {
      // Update existing task
      const response = await fetch(
        `https://task-manger-todo-with-authentication.onrender.com/api/tasks/${taskToEdit._id}`,
        {
          method: "PATCH",
          body: JSON.stringify(task),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        },
      );
      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
      } else {
        setError(null);
        console.log("task updated:", json);
        onUpdate(json);
        onClose();
      }
    } else {
      // Create new task
      const response = await fetch("https://task-manger-todo-with-authentication.onrender.com/api/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
      } else {
        setError(null);
        setTitle("");
        setDescription("");
        setDate("");
        console.log("new task added:", json);
        dispatch({ type: "CREATE_TASK", payload: json });
        onClose();
      }
    }
    setIsLoading(false);
  };

  const handleClose = () => {
    setTitle("");
    setDescription("");
    setDate("");
    setError(null);
    onClose();
  };

  return (
    <div className="task-form-overlay" onClick={handleClose}>
      <div className="task-form-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={handleClose}>
          ×
        </button>
        <h3>{isEditing ? "Edit Task" : "Add New Task"}</h3>
        <form onSubmit={handleSubmit}>
          <label>Task Title*:</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Enter task title"
            required
          />

          <label>Description:</label>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Enter task description (optional)"
          />

          <label>Deadline*:</label>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            required
          />

          <button type="submit" disabled={isLoading}>
            {isLoading
              ? isEditing
                ? "Updating..."
                : "Adding..."
              : isEditing
                ? "Update Task"
                : "Add Task"}
          </button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default TaskForm;

import { useEffect, useState } from "react";
import TaskDetails from "../components/TaskDetails";
import TaskForm from "../components/TaskForm";
import { useTaskContext } from "../hooks/useTasksContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { tasks, dispatch } = useTaskContext();
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("https://task-manger-todo-with-authentication.onrender.com/api/tasks/", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TASKS", payload: json.tasks });
      }
    };
    fetchTasks();
  }, []);

  const handleEdit = (task) => {
    setEditingTask(task);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingTask(null);
  };

  return (
    <div className="home">
      <button className="add-task-btn" onClick={() => setShowModal(true)}>
        Add New Task
      </button>
      <div className="tasks">
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskDetails key={task._id} task={task} onEdit={handleEdit} />
          ))
        ) : (
          <div className="empty-state">
            <h3>No tasks yet</h3>
            <p>Add your first task to get started!</p>
          </div>
        )}
      </div>
      {showModal && (
        <TaskForm
          taskToEdit={editingTask}
          onClose={handleCloseModal}
          onUpdate={(updatedTask) => {
            dispatch({ type: "UPDATE_TASK", payload: updatedTask });
          }}
        />
      )}
    </div>
  );
};

export default Home;

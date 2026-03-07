//date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import format from "date-fns/format";
import { useTaskContext } from "../hooks/useTasksContext";
import { useAuthContext } from "../hooks/useAuthContext";
const TaskDetails = ({ task, onEdit }) => {
  const { dispatch } = useTaskContext();
  const { user } = useAuthContext();

  const handleDelete = async () => {
    if (!user) {
      return;
    }
    const response = await fetch(
      "http://localhost:4000/api/tasks/" + task._id,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      },
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_TASK", payload: json });
    }
  };

  const handleEdit = () => {
    onEdit(task);
  };

  return (
    <div className="task-details">
      <h4>{task.title}</h4>
      <p>
        <strong>Description:</strong>
        {task.description}
      </p>
      <p>
        <strong>Deadline: </strong>
        {format(new Date(task.date), "MMM do, yyyy")}
      </p>
      <p>
        {formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}
      </p>
      <span
        className="material-symbols-outlined edit-btn"
        onClick={handleEdit}
        title="Edit task"
      >edit</span>
      <span
        className="material-symbols-outlined delete-btn"
        onClick={handleDelete}
        title="Delete task"
      >delete</span>
    </div>
  );
};

export default TaskDetails;

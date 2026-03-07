//date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import format from "date-fns/format";
import { useTaskContext } from "../hooks/useTasksContext";
const TaskDetails = ({ task }) => {
     const { dispatch } = useTaskContext();
  const handleClick = async () => {
    const response= await fetch('http://localhost:4000/api/tasks/'+task._id,{
        method: 'DELETE'
    })
    const json  = await response.json()
    if(response.ok){
        dispatch({ type: "DELETE_TASK", payload: json});
    }
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
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default TaskDetails;

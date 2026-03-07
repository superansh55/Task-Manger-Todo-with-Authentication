//date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import format from "date-fns/format";

const TaskDetails = ({ task }) => {
  const handleClick = () => {};
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

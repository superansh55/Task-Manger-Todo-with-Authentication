import { useEffect, useState } from "react";
import TaskDetails from "../components/TaskDetails";

const Home = () => {
  const [tasks, setTasks] = useState(null);
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("http://localhost:4000/api/tasks/");
      const json = await response.json();

      if (response.ok) {
        setTasks(json.tasks);
      }
    };
    fetchTasks();
  }, []);

 
  return (
    <div className="home">
      <div className="tasks">
        {tasks &&
          tasks.map((task) => <TaskDetails key={task._id} task={task} />)}
      </div>
    </div>
  );
};

export default Home;

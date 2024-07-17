import { useState, useEffect } from 'react'
import TaskList from '../components/TaskList'
import { getTasks } from '../api/tasks'

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const tasks = await getTasks();
    setTasks(tasks.data);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Home

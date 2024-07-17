import { useState, useEffect } from 'react'
import TaskList from '../components/TaskList'
import { getTasks, updateTask, deleteTask, createTask } from '../api/tasks'
import TaskForm from '../components/TaskForm'

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const tasks = await getTasks();
    setTasks(tasks.data);
  };

  const handleUpdateTask = async (id, updatedTask) => {
    await updateTask(id, updatedTask);
    fetchTasks();
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const handleAddTask = async (task) => {
    console.log(task);
    await createTask(task);
    const tasks = await getTasks();
    setTasks(tasks.data);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default Home

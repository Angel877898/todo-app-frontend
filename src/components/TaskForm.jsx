import { useState } from 'react';
import PropTypes from 'prop-types'

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(task);
    setTask({ name: '', description: '', startDate: '', endDate: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={task.name} onChange={handleChange} placeholder="Task Name" required />
      <input name="description" value={task.description} onChange={handleChange} placeholder="Description" required />
      <input type="date" name="startDate" value={task.startDate} onChange={handleChange} required />
      <input type="date" name="endDate" value={task.endDate} onChange={handleChange} required />
      <input type="email" name="email" value={task.email} onChange={handleChange} placeholder="Responsible Email" required />
      <button type="submit">Add Task</button>
    </form>
  );
};

TaskForm.propTypes = {
    onAddTask: PropTypes.func.isRequired,
}
export default TaskForm;

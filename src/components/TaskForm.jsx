import { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Box, Typography } from '@mui/material';

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    email: ''
  });

  const [emailError, setEmailError] = useState('');
  const [dateError, setDateError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });

    if (name === 'email') {
      const emailPattern = EMAIL_REGEX;
      if (!emailPattern.test(value)) {
        setEmailError('Invalid email');
      } else {
        setEmailError('');
      }
    }

    if (name === 'startDate') {
      if (task.endDate && new Date(value) > new Date(task.endDate)) {
        setTask({ ...task, endDate: '' });
      }
    }

    if (name === 'endDate') {
      if (new Date(value) < new Date(task.startDate)) {
        setDateError('End date must be the same or after start date');
      } else {
        setDateError('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !dateError) {
      onAddTask(task);
      setTask({ name: '', description: '', startDate: '', endDate: '', email: '' });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: -2 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Task name"
        name="name"
        value={task.name}
        onChange={handleChange}
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="description"
        label="Description"
        name="description"
        value={task.description}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="startDate"
        label="Start date"
        name="startDate"
        type="date"
        value={task.startDate}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        margin="normal"
        fullWidth
        id="endDate"
        label="End date"
        name="endDate"
        type="date"
        value={task.endDate}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          min: task.startDate,
        }}
        error={!!dateError}
        helperText={dateError}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Responsible email"
        name="email"
        value={task.email}
        onChange={handleChange}
        error={!!emailError}
        helperText={emailError}
      />
      <Typography variant="caption" display="block" sx={{ color: 'grey', mt: 2 }}>
        Fields with * are required.
      </Typography>
      <Button disabled={!task.name || !task.description || !task.startDate || !task.email || !!emailError || !!dateError} type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }}>
        Add Task
      </Button>
    </Box>
  );
};

TaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default TaskForm;

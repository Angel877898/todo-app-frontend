import { useState, useEffect } from 'react'
import TaskList from '../components/TaskList'
import { getTasks, updateTask, deleteTask, createTask } from '../api/tasks'
import TaskForm from '../components/TaskForm'
import { Container, Typography, Grid, Paper, Box } from '@mui/material'

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
    if (updatedTask.completed) {
      updatedTask.endDate = new Date().toISOString(); 
    } else {
      updatedTask.endDate = ''; 
    }
    await updateTask(id, updatedTask);
    fetchTasks();
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const handleAddTask = async (task) => {
    await createTask(task);
    const tasks = await getTasks();
    setTasks(tasks.data);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        TODO List
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TaskForm onAddTask={handleAddTask} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ height: '465px', overflow: 'hidden' }}>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                overflowY: 'auto',
              }}
            >
              <TaskList tasks={tasks} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask} />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home

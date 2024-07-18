import axios from 'axios';

const API_URL = 'https://todos-backend-seven.vercel.app/api/tasks';

export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTask = async (task) => {
  await axios.post(API_URL, task);
};

export const updateTask = async (id, updatedTask) => {
  await axios.put(`${API_URL}/${id}`, updatedTask);
};

export const deleteTask = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

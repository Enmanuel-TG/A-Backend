import axios from "./axios";

export const getTasksRequest = () => axios.get("/tasks")
export const getTaskRequest = (id) => axios.get(`/tasks/${id}`)
export const createTaskRequest = (task) => axios.post("/tasks", task)
export const updataTaskRequest = (task) => axios.put(`/task/${task._id}`, task);
export const deleteTaskRequest = async (id) => axios.delete(`/tasks/${id}`);
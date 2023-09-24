import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTasksRequest } from "../api/tasks";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const res = await getTasksRequest();
    try {
      setTasks(res.data)
    } catch (error) {
      console.log(error)
    }
   }


  const createTasks = async (task) => {
    const res = await createTaskRequest(task);
    console.log(res)
  }

  return <TaskContext.Provider
    value={{
      tasks,
      createTasks,
      getTasks,
    }}
  >{children}</TaskContext.Provider>;
}

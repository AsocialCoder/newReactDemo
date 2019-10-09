import React, { createContext, useState, useContext, useEffect } from "react";
import DefaultAPI from "../api/DefaultAPI";
import { AuthContext } from "../contexts/AuthContext";
import openNotification from "../components/Notification/Notification";
import _ from "lodash"

export const TaskContext = createContext();

const TaskContextProvider = props => {
  const [tasks, setTasks] = useState([]);
  const { userData } = useContext(AuthContext);

  const getTasks = async () => {
    const { data } = await DefaultAPI("/tasks", "GET", {
      user_one: userData._id
    });
    if(_.result(data,"data"))
    {
      setTasks([...data.data]);
    }
    
  };

  const deleteTask = async item => {
    const { data } = await DefaultAPI(`/tasks/${item._id}`, "DELETE", {});
    if (data.success) {
      openNotification("Task Deleted", `${item.task_name} has been deleted`);
      setTasks(_.filter(tasks,function(task){ return task._id !== item._id}));
    } else {
      openNotification("Something went wrong", `${data.error}`);
    }
  };

  const addTask = async item => {
    const { data } = await DefaultAPI("/tasks", "POST", item);
    if (data.success) {
      setTasks([...tasks, { ...data.data }]);
      openNotification("Task Added", `${data.data.task_name} has been added`);
    } else {
      openNotification("Something went wrong", `${data.error}`);
    }
  };

  useEffect(() => {
    if (userData !== null && userData.mail !== undefined) 
      getTasks();
  }, [userData]);

  return (
    <TaskContext.Provider
      value={{ tasks, getTasks, setTasks, deleteTask, addTask }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;

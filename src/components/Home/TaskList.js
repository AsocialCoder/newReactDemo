import React, { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";

const TaskList = () => {
  const { tasks, deleteTask } = useContext(TaskContext);
  const Tasks = tasks.map((data, index) => {
    return <div key={index} onClick={()=> deleteTask(data)}>{data.task_name}</div>;
  });

  return (
    <div className="TaskListContainer">
      <h1>Task List</h1>
      {Tasks}
    </div>
  );
};

export default TaskList;

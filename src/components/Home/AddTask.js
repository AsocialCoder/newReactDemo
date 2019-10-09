import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { TaskContext } from "../../contexts/TaskContext";
import openNotification from "../Notification/Notification";

const AddTask = () => {
  const [task, setTask] = useState("");
  const { userData } = useContext(AuthContext);
  const { addTask } = useContext(TaskContext);

  const submitForm = async e => {
    e.preventDefault();
    if (task !== "") {
      addTask({
        task_name: task,
        user_one: userData._id,
        user_two: 2
      });
      setTask("");
    } else {
      openNotification("Empty input", "Please fill inpus");
    }
  };

  return (
    <div className="AddTaskContainer">
      <h1>ADD TASK</h1>
      <form className="AddTaskForm" onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Task"
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <input type="submit" value="Ekle" />
      </form>
    </div>
  );
};

export default AddTask;

import React from "react"
import Counter from "./Counter";
import AddTask from "./AddTask";
import TaskList from "./TaskList";


export default [
  {
    path: "/home/info",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <Counter />,
    name:"İnfo",
    icon:"info",
    role:1,
  },
  {
    path: "/home/bubblegum",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <AddTask />,
    name:"Add Task",
    role:1,
    icon:"reddit"
  },
  {
    path: "/home/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <TaskList />,
    name:"My Tasks",
    icon:"api",
    role:1,
  }
];
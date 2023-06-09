import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TaskForm from "./TaskForm";
import TaskManager from "./TaskManager";
import icon from "../assets/Images/icon.png";

export default function() {
  const [tasks, setTasks] = useState([]);

  const addTasks = (task) => {
    setTasks([
      ...tasks,
      { id: uuidv4(), todo: task, completed: false, isEditing: false },
    ]);
    console.log(tasks);
  };
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = id => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div>
      <div className="wrapper">
        <div className="header">
          <h1>Save The Day! </h1>
          <img src={icon} alt="" />
        </div>
        <TaskForm addTasks={addTasks} />

        {tasks.map((task, index) => (
          <TaskManager
            todo={task}
            key={index}
            toggleComplete={toggleComplete} deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

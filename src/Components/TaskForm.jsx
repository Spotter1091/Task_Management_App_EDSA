import React from 'react'
import { useState } from 'react';

export default function TaskForm({addTasks}) {
  const[value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    addTasks(value);
    setValue('')

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Enter new task..."
        onChange={(e) => setValue(e.target.value)} value={value} />
      <button className="task-button" type="submit">
        Add Task
      </button>
    </form>
  );
}

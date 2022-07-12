import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [currCategory, setCurrCategory] = useState("All");

  const onTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const filterTasks = tasks.filter((task) => {
    if (currCategory === "All") return true;
    return task.category === currCategory;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        currCategory={currCategory}
        setCurrCategory={setCurrCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
        tasks={filterTasks}
        setTasks={setTasks}
        currCategory={currCategory}
      />
    </div>
  );
}

export default App;

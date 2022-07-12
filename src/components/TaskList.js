import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks }) {
  function handleDelete(event) {
    setTasks((tasks) =>
      tasks.filter((task) => {
        return task.text !== event.target.value;
      })
    );
  }

  return (
    <div className="tasks">
      {tasks.map((task) => {
        return (
          <Task
            key={task.text}
            text={task.text}
            category={task.category}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default TaskList;

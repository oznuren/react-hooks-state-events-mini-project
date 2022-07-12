import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("All");
  const catWithoutAll = categories
    .filter((category) => category !== "All")
    .map((category) => {
      return <option key={category}>{category}</option>;
    });

  function handleSetInput(event) {
    setInput(event.target.value);
  }

  function handleSetSelect(event) {
    setSelect(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({ text: input, category: select });
    setInput("");
    setSelect("Code");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={input}
          onChange={handleSetInput}
        />
      </label>
      <label>
        Category
        <select name="category" value={select} onChange={handleSetSelect}>
          {catWithoutAll}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

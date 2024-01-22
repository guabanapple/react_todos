import React from "react";

export default function Todo(props) {
  const handleCheckboxClick = () => {
    props.onCheckboxClick(props.todo.id);
  };
  const handleDeleteClick = () => {
    props.onDeleteClick(props.todo.id);
  };

  return (
    <li>
      <label htmlFor="checkbox">
        <input
          type="checkbox"
          checked={props.todo.completed}
          onChange={handleCheckboxClick}
        />
      </label>
      <span>{props.todo.title}</span>
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

import React from 'react';

const TodoItem = ({ id, text, completed, deleteTodo, toggleCheckboxTodo }) => {
  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleCheckboxTodo(id)}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => deleteTodo(id)}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;

import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, toggleCheckboxTodo }) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            todos={todos}
            deleteTodo={deleteTodo}
            toggleCheckboxTodo={toggleCheckboxTodo}
            {...todo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;

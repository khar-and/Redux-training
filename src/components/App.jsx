import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import InputForm from './InputForm';
import TodoList from './TodoList';

export const App = () => {
  const [todos, setTodos] = useState([]); //Стейт для наших Тудушек

  // Обработка добавления нашей тудушки в стейт Тудушек
  const addTodo = inputValue => {
    setTodos([
      ...todos, //распиляем существующий массив
      {
        // добавляем новый елемент массива (наша тудушка)
        id: nanoid(),
        text: inputValue,
        completed: false,
      },
    ]);
  };

  // Обработчик удаления Тудушки
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Изменение состояния по віполнению Тудушки
  const toggleCheckboxTodo = todoId => {
    setTodos(
      todos.map(todo => {
        if (todo.id !== todoId) {
          return todo;
        }
        return { ...todo, completed: !todo.completed };
      })
    );
  };

  return (
    <div>
      <InputForm addTodo={addTodo} />
      {todos && (
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleCheckboxTodo={toggleCheckboxTodo}
        />
      )}
    </div>
  );
};

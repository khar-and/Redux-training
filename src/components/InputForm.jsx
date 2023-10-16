import React, { useState } from 'react';

const InputForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState(''); // Локальний стейт для хранения значения інпута

  // Обработка изменения инпута
  const handleChangeInput = evt => {
    const { value } = evt.currentTarget;
    setInputValue(value);
  };

  //Обработка отправки формі при нажатии на кнопку
  const handleSubmitForm = evt => {
    evt.preventDefault();
    addTodo(inputValue); //Добавляем в стейт - визиваем функцию
    setInputValue(''); // Очищаем поле инпута
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor="">
        <input type="text" value={inputValue} onChange={handleChangeInput} />
      </label>
      <button type="submit">+ Add</button>
    </form>
  );
};

export default InputForm;

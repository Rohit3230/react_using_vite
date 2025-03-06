import React from 'react';
import ToDo from './ToDo'; // Import the ToDo component
const ToDoList = ({ toDoList, handleToggle }) => {  return (    <div>      {toDoList.map((todo) => (        <ToDo key={todo.id} todo={todo} handleToggle={handleToggle} />      ))}    </div>  );};
export default ToDoList;
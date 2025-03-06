import React from 'react';import { useState } from 'react'; // import the hook
import TodosHeader from "./TodosHeader";
import data from './data.json';
import ToDoList from "./ToDoList";
import AddToDo from './AddToDo';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from "./../AppHeader";
function Todos() {  const [toDoList, setToDoList] = useState(data);
  const addTodoHandel = (newTodoObj) => {    setToDoList([...toDoList, newTodoObj])  }
  const handleToggle = (id) => {    const updateDataList = toDoList.map((todoObj) => {      return (todoObj?.id === id) ? { ...todoObj, complete: !todoObj.complete } : todoObj;    });    setToDoList(updateDataList);  }  
return (    <div>      <AppHeader />      <AddToDo addTodoHandel={addTodoHandel} />      <TodosHeader />      <ToDoList toDoList={toDoList} handleToggle={handleToggle} />    </div>  );}
export default Todos;
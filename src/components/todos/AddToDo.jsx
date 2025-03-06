import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState } from 'react';
const AddToDo = ({ addTodoHandel }) => {    const [task, setTask] = useState('');
    return (        <>            <input value={task} onChange={(e) => setTask(e.target.value)}></input>            <button onClick={() => addTodoHandel({ task: task, complete: false, id: (new Date()).getTime() })}>Add New Todo</button>        </>    );};
export default AddToDo;
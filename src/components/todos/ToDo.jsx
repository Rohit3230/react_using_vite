import ListGroup from 'react-bootstrap/ListGroup';import React from 'react';
const ToDo = ({ todo, handleToggle }) => {
    return (        <ListGroup as="ul" onClick={() => handleToggle(todo.id)}>            {                todo.complete ? <ListGroup.Item as="li" active>                    {todo.task}                </ListGroup.Item>                    :                    <ListGroup.Item as="li">                        {todo.task}                    </ListGroup.Item>            }        </ListGroup>    );};
export default ToDo;
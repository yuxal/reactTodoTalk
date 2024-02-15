import React, {useContext, useState} from 'react';
import Todo from '../Todo';
import { TodoContext } from '../context/TodoProvider';
import {Link} from "react-router-dom";

function ManageTodosContext() {
    const { todos, deleteTodo } = useContext(TodoContext);
    const [color, setColor] = useState('white');
    return (
        <div style={{padding: 20, background: color, height: "100vh"}}>
            <h2>Manage Todos</h2>
            <button onClick={() => setColor(color === 'white' ? 'grey' : 'white')}>Toggle color</button>
            <ul>
                {todos.map((todo: string, index: number) => (
                    <div key={index} onClick={() => deleteTodo(index)}>
                        <Todo note={todo}  />
                    </div>
                ))}
            </ul>
            <Link to={"/"}>Create Todos</Link>
        </div>
    );
}

export default ManageTodosContext;

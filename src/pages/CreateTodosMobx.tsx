import React, {useContext, useEffect, useState} from 'react';
import {useLocalStorage} from "../hooks/useLocalStorage";
import Todo from "../Todo";
import {Link} from "react-router-dom";
import {TodoContext, TodoProvider} from "../context/TodoProvider";
import {todoStore} from "../stores/TodoStore";
import {observer} from "mobx-react";

function TodoApp() {
    const [todo, setTodo] = useState<string>('');

    const todos = todoStore.todos;
    useEffect(() => {
        document.title = `You have ${todos.length} todos`;
    }, [todos]);

    const handleChange = (event: any) => {
        setTodo(event.target.value);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (todo) {
            todoStore.addTodo(todo)
            setTodo('');
        }
    };

    const renderTodos = () => {
        return todos.map((todo: string, index: number) => (
            <Todo key={index} note={todo}/>
        ));
    };

    return (
        <div style={{padding: 20}}>
            <h2>Create Todo</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Todo:
                    <input type="text" value={todo} onChange={handleChange} />
                </label>
                <button type="submit">Add Todo</button>
            </form>
            <h3>Todos:</h3>
            <ul>
                {renderTodos()}
            </ul>
            <Link to={"/manage"}>Manage Todos</Link>
        </div>
    );
}

export default observer(TodoApp);

import React, {useEffect, useState} from 'react';
import {useLocalStorage} from "../hooks/useLocalStorage";
import Todo from "../Todo";
import {Link} from "react-router-dom";

function TodoApp() {
    const [todo, setTodo] = useState<string>('');
    const [todos, setTodos] = useState<string[]>([]);
    //const [todos, setTodos] = useLocalStorage('todos', []);
    useEffect(() => {
    // Update document title with the count of todos
    document.title = `You have ${todos.length} todos`;
}, [todos]);
    const handleChange = (event: any) => {
        setTodo(event.target.value);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (todo) {
            setTodos([...todos, todo]);
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
        </div>
    );
}

export default TodoApp;






/*useEffect(() => {
    // show a message every 30 seconds
    const interval = setInterval(() => {
        alert('You have been on this page for 30 seconds');
    }, 30000);
    // THERES A BUG HERE!
}, []);*/
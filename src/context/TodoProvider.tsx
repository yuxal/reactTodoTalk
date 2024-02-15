import React, { createContext, useState } from 'react';

export const TodoContext = createContext({
    todos: [] as string[],
    addTodo: (note: string) => {},
    deleteTodo: (index: number) => {}
});

export const TodoProvider = ({ children }: any) => {
    const [todos, setTodos] = useState<string[]>([]);

    const addTodo = (newTodo: string) => {
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (todoIndex: number) => {
        const newTodos = todos.filter((_, index) => index !== todoIndex);
        setTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
    {children}
    </TodoContext.Provider>
);
};

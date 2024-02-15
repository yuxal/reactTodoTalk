import React from 'react';
import Todo from "../Todo";

class TodoApp extends React.Component {
    state = { todo: '', todos: [] };

    handleChange = (event: any) => {
        this.setState({ todo: event.target.value });
    };

    handleSubmit = (event: any) => {
        event.preventDefault();
        if (this.state.todo) {
            this.setState({
                todos: [...this.state.todos, this.state.todo],
                todo: ''
            });
        }
    };

    renderTodos = () => {
        return this.state.todos.map((todo, index) => (
            <Todo key={index} note={todo}/>
        ));
    };

    render() {
        return (
            <div style={{padding: 20}}>
                <h2>Create Todo</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Todo:
                        <input type="text" value={this.state.todo} onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add Todo</button>
                </form>
                <h3>Todos:</h3>
                <ul>
                    {this.renderTodos()}
                </ul>
            </div>
        );
    }
}

export default TodoApp;

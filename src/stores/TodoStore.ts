import {action, computed, makeAutoObservable, observable} from "mobx";

class TodoStore {
    @observable
    todos = [] as string[];
    constructor() {
        makeAutoObservable(this);
    }

    @action
    addTodo = (todo: string) => {
        this.todos.push(todo);
    };

    @action
    deleteTodo = (index: number) => {
        this.todos.splice(index, 1);
    };
}

export const todoStore = new TodoStore();

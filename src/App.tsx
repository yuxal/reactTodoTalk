import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CreateTodoClass from "./pages/CreateTodoClass";
import CreateTodoHooks from "./pages/CreateTodoHooks";
import ManageTodosContext from "./pages/ManageTodosContext";
import CreateTodosContext from "./pages/CreateTodosContext";
import {TodoProvider} from "./context/TodoProvider";
import CreateTodosMobx from "./pages/CreateTodosMobx";
import ManageTodosMobx from "./pages/ManageTodosMobx";

function App() {
  return (
      <TodoProvider>
          <Routes>
              <Route path="*" element={<CreateTodosMobx/>}/>
              <Route path="/manage" element={<ManageTodosMobx/>}/>
          </Routes>
      </TodoProvider>
  );
}

export default App;

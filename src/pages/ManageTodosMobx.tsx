import React, {lazy, useContext, useState} from 'react';
import Todo from '../Todo';
import { TodoContext } from '../context/TodoProvider';
import { FixedSizeList } from 'react-window';
import {todoStore} from "../stores/TodoStore";
import { observer } from 'mobx-react';
import {Link} from "react-router-dom";

//const Todo = lazy(() => import('../Todo'));
function ManageTodos() {

    const [color, setColor] = useState('white');
    return (
        <div style={{padding: 20, background: color, height: "100vh"}}>
            <h2>Manage Todos</h2>
            <button onClick={() => setColor(color === 'white' ? 'grey' : 'white')}>Toggle color</button>
            <h3>Todos starting with S:{todoStore.todos.filter(todo => todo[0] === 'S').length}</h3>
            <ul>
                {todoStore.todos.map((todo: string, index: number) => (
                    <div onClick={() => todoStore.deleteTodo(index)}>
                        <Todo key={index} note={todo}  />
                    </div>
                ))}
            </ul>

            <Link to={"/"}>Create Todos</Link>
        </div>
    );
}

export default observer(ManageTodos);


/*
{
      <FixedSizeList
         height={500}
         itemCount={todoStore.todos.length}
         itemSize={130}
         width={300}>
            {({ index, style }) => (
              <div style={style} onClick={() => todoStore.deleteTodo(index)}>
              <Todo note={todoStore.todos[index]} />
             </div>
             )}
       </FixedSizeList>
}*/

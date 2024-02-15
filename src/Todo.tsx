import React from "react";

function Todo(props: {note: string}) {
    return <div style={{background: 'yellow', width: 100, height: 100, padding: 10, margin: 10}}>
        <h1>Todo</h1>
        <p>{props.note}</p>
    </div>
}
export default React.memo(Todo);
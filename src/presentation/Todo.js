import React from 'react'

const Todo = ({copy, deleteTodo, id}) =>(
    <li>
        <p>{copy}</p>
        <button onClick={() => deleteTodo(id)} className="btn btn-default btn-xs">X</button>
    </li>
)

export default Todo
import React, {Fragment, useState} from 'react';
import { useGetTodoIdQuery, useGetTodosQuery } from './store/apis';

export const TodoApp = () => {
    // const {data: todos = [], isLoading} = useGetTodosQuery();
    
    const [todoId, setTodoId] = useState(1)
    const {data: todo, isLoading} = useGetTodoIdQuery(todoId);
    

    const nextTodo = () => {
        setTodoId(todoId + 1);
    }

    const previousTodo = () => {
        if (todoId === 1) return;
        setTodoId(todoId - 1);
    }

  return (
    <Fragment>
        <h1>Todos - RTK Query</h1>
        <hr/>
        <h4>Loading: {isLoading ? 'True' : 'False'}</h4>
        <pre>{JSON.stringify(todo)}</pre>
        <button onClick={previousTodo} >Previous todo</button>
        <button onClick={nextTodo} >Next todo</button>
        {/* <ul>
            {
                todos.map((todo) => (
                    <li key={todo.id}>
                        <strong>{todo.completed ? 'Done' : 'Pending'}</strong>
                        {todo.title}
                    </li>
                ))
            }
        </ul> */}
    </Fragment>
  )
}

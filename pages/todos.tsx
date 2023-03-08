import React from 'react'
import axios from 'axios'

const Todos = ({ todos }: any) => {
    return (
        <>
            {
                todos.map((todo: any) => {
                    return (
                        <div key={todo.id}>
                            <h2>{todo.todo}</h2>
                            <p>{todo.completed}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

async function getAllTodos() {
    const response = await axios.get('https://dummyjson.com/todos')
    return response.data.todos
}

export async function getStaticProps() {
    // Fetch all todos
    const todos = await getAllTodos();

    // Return the todos as props
    return {
        props: {
            todos,
        },
    };
}



export default Todos
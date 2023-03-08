import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { json } from 'stream/consumers';
import Todos from '../todos';

const Todo = ({ singleTodo }: any) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading.....</div>
    }
    return (
        <div>
            
            {singleTodo.todo}
        </div>
    )
}


async function getAllTodos() {
    const response = await axios.get('https://dummyjson.com/todos')
    return response.data.todos
}



export async function getStaticPaths() {
    const data = await getAllTodos();
    const paths = data.map((todo: any) => ({
        params: { id: todo.id.toString() }
    }));

    return { paths, fallback: false };
}


// async function checkApi(){
//     const {data} = await axios.get((`https://dummyjson.com/todos`));
//     return data.todos

// }
// checkApi().then((res)=>console.log('bilal',res))

export async function getStaticProps({ params }: any) {
    const {data} = await axios.get((`https://dummyjson.com/todos/${params.id}`));
    const singleTodo = data

    return { props: { singleTodo } };
}

export default Todo
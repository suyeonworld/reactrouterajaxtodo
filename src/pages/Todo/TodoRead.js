import React, {useEffect, useState} from 'react';
import Layout1 from "../../templates/Layout1";
import axios from "axios";
import {useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {logDOM} from "@testing-library/react";

const getTargetTodo = async (id) => {
    const {data} = await axios.get(`http://localhost/todos/${id}`)
    console.log("READ" ,data)
    return data
}

const changeTargetTodo = async (todo) => {
    const {data} = await axios.put(`http://localhost/todos/${todo.id}`, todo)
    console.log("CHANGETODO" ,data)
    return data
}

const deleteTargetTodo = async (id) =>
    await axios.delete(`http://localhost/todos/${id}`)


const initState = {
    id : 0,
    title : '',
    author : ''
}

function TodoRead(props) {

    const [todo, setTodo] = useState({...initState});

    const {id} = useParams()

    const history = useHistory()

    //const getId = useSelector(state => state.todoReducer.id)

    console.log("id"+id)

    useEffect(() => {
        getTargetTodo(id).then((data) => {setTodo(data)})
    },[id])

    const changeTodo = (prop, value) => {
        todo[prop] = value
        setTodo({...todo})
    }

    const updateClick = () =>
        changeTargetTodo(todo).then(history.push('/todo/list'))

    const deleteClick = () =>
        deleteTargetTodo(id).then(history.replace('/todo/list'))

    return (
        <Layout1>
            <div>
                <input value={todo.title} onChange={(e) => { changeTodo('title', e.target.value)}}/>
            </div>
            <div>
                <input value={todo.author} onChange={(e) => { changeTodo('author', e.target.value)}}/>
            </div>
            <div>
                <button onClick={() => {updateClick()}}>UPDATE</button>
                <button onClick={() => {deleteClick()}}>DELETE</button>
            </div>

        </Layout1>
    );
}

export default TodoRead;
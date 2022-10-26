import React, {useState} from 'react';
import Layout1 from "../../templates/Layout1";
import axios from "axios";
import {setid} from "../../reducers/todoSlice";
import {useHistory} from "react-router-dom";

const inputTodo = async (todo) =>
    await axios.post('http://localhost/todos',todo)


const initState = {
    title : '',
    author : ''
}

function TodoInput(props) {

    const [todo, setTodo] = useState({...initState})

    const history = useHistory()

    const changeTodo = (prop, value) => {
        todo[prop] = value
        setTodo(todo)

        console.log('',todo)
    }

    const saveClick = () =>
        inputTodo(todo).then(history.replace('/todo/list'))


    return (
        <Layout1>
            <h1>TodoInput</h1>
            <div>
                TITLE : <input onChange={(e) => {changeTodo('title',e.target.value)}}/>
            </div>
            <div>
                AUTHOR : <input onChange={(e) => {changeTodo('author',e.target.value)}}/>
            </div>
            <div>
                <button onClick={() => {saveClick()}}>SAVE</button>
            </div>
        </Layout1>
    );
}

export default TodoInput;
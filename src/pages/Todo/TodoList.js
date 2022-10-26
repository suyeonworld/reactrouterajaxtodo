import React, {useEffect, useState} from 'react';
import Layout1 from "../../templates/Layout1";
import axios from "axios";
import {setid} from "../../reducers/todoSlice";
import {useDispatch} from "react-redux";
import {Link, useHistory} from "react-router-dom";

const getTodo = async () => {
    const {data} = await axios.get('http://localhost/todos')
    return data
}

function TodoList(props) {

    const [todo, setTodo] = useState([]);

    const dispatch = useDispatch();

    const history = useHistory()

    useEffect(() => {
        getTodo().then((data) => {
            setTodo(data)
        })
    },[])

    const liClick = (id) => {
        dispatch(setid(id))
        history.push('/todo/read/'+id)
    }

    const list = todo.map(({id, title, author}) =>
        <li key={id} onClick={() => {liClick(id)}}>
            {id} -- {title} -- {author}
        </li>)

    return (
        <Layout1>

            <h1>TodoList</h1>
            <button onClick={() => {history.push('/todo/input')}}>INPUT</button>
            <div>{list}</div>
        </Layout1>
    );
}

export default TodoList;
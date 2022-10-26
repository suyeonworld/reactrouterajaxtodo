import React from 'react';
import {Route, Switch} from "react-router-dom";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import TodoRead from "./TodoRead";

function Index(props) {
    return (
        <Switch>
            <Route path={'/todo/list'} component={TodoList}></Route>
            <Route path={'/todo/input'} component={TodoInput}></Route>
            <Route path={'/todo/read/:id'} component={TodoRead}></Route>
            <Route path={'/todo'} component={TodoList}></Route>
        </Switch>
    );
}

export default Index;
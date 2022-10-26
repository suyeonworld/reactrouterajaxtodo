import React from 'react';
import {Link} from "react-router-dom";

function Layout1(props) {
    return (
        <div>
            <div>HEADER</div>

            <Link to={'/'}>MAIN</Link>
            <Link to={'/about'}>ABOUT</Link>
            <Link to={'/todo/list'}>TODO</Link>

            <div>{props.children}</div>

            <div>FOOTER</div>
        </div>
    );
}

export default Layout1;
import React, {Component} from 'react';
import {Link , NavLink ,withRouter} from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink to='/add-post'>Add Post</NavLink></li>
                    <li><NavLink to='/posts'>Posts</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default withRouter(Header);
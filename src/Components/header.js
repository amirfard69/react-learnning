import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to='/add-post'>Add Post</Link></li>
                    <li><Link to='/posts'>Posts</Link></li>
                </ul>
            </div>
        )
    }
}
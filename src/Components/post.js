import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Post extends Component {
    render() {
        return (
            <div>
                <h3>The Posts:
                    <Link to={{pathname: '/posts/' + this.props.id}}>
                        {this.props.title}
                    </Link>
                </h3>
                <p>{this.props.body}</p>
            </div>
        )
    }
}

export default withRouter(Post);
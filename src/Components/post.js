import React, {Component} from 'react';

export default class Post extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h3>The Posts: {this.props.title}</h3>
                <p>{this.props.content}</p>
            </div>
        )
    }
}
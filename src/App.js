import React, {Component} from 'react';
import AddPost from './Components/create-post';

export default class App extends Component {
    state = {
        title: 'my-fisrt-page',
        post: [
            {id: 1, name: 'post1', content: 'post content1'},
            {id: 2, name: 'post2', content: 'post content2'},
            {id: 3, name: 'post3', content: 'post content3'},
        ]
    }

    addItem = (data) => {
        this.setState((oldState, props) => {
                let newState = {...oldState};
                let id = newState.post[newState.post.length - 1].id + 1;
                newState.post = [...newState.post, {id, ...data}];
                return (newState);
            }
        )
    }

    render() {
        return (
            <div>
                <AddPost addItem={this.addItem}/>
                <h1>{this.state.title}</h1>
                {this.state.post.map(post =>
                    (<div key={post.id}>
                            <h3>The Posts: {post.name}</h3>
                            <p>{post.content}</p>
                        </div>
                    )
                )}
            </div>
        )
    }

}

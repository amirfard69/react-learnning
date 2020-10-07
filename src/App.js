import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Post from './Components/post';
import AddPost from './Components/create-post';
import Header from './Components/header';

export default class App extends Component {
    state = {
        title: 'Posts',
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
            <BrowserRouter>
                <Route path='/' component={Header}/>
                <Route path='/add-post' render={(props) => <AddPost addItem={this.addItem} {...props}/>}/>
                <Route path='/posts' render={(props) =>
                    this.state.post.map(post => (
                        <Post key={post.id} title={post.name} content={post.content} {...props}/>)
                    )
                }/>
            </BrowserRouter>
        )
    }
}

import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Post from './Components/post';
import AddPost from './Components/create-post';
import Header from './Components/header';

class App extends Component {
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
                <Switch>
                    <Route path='/add-post' render={(props) => <AddPost addItem={this.addItem} {...props}/>}/>
                    <Route path='/posts' exact render={(props) =>
                        this.state.post.map(post => (
                            <Post key={post.id} title={post.name} content={post.content} id={post.id} {...props}/>)
                        )
                    }/>
                </Switch>
                <Switch>
                    <Route path='/posts/amir' render={(props) => <h1>amirfard</h1>}/>
                    <Route path='/posts/:id' render={(props) => <h1>{props.match.params.id}</h1>}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
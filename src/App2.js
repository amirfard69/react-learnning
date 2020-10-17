import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Post from './Components/post';
import AddPost from './Components/create-post';
import Header from './Components/header';
import SinglePost from './Components/singlePost';

class App extends Component {
    state = {
        title: 'Posts',
        post: []
    };

    addItem = (data) => {
        this.setState((oldState, props) => {
                let newState = {...oldState};
                let id = newState.post[newState.post.length - 1].id + 1;
                newState.post = [...newState.post, {id, ...data}];
                return (newState);
            }
        )
    };

    render() {
        return (
            <BrowserRouter>
                <Route path='/' component={Header}/>
                <Switch>
                    <Route path='/add-post' render={(props) => <AddPost addItem={this.addItem} {...props}/>}/>
                    <Route path='/posts' exact render={(props) =>
                        this.state.post.map(post => (
                            <Post key={post.id} title={post.title} body={post.body} id={post.id} {...props}/>)
                        )
                    }/>
                </Switch>
                <Switch>
                    <Route path='/posts/:id' render={(props) => <SinglePost {...props}/>}/>
                </Switch>
            </BrowserRouter>
        )
    }

    componentDidMount() {
        axios
            .get('https://jsonplaceholder.ir/posts')
            .then((response) => {
                this.setState((oldState, props) => {
                    let newstate = {...oldState, post: response.data};
                    return newstate;
                });
            })
            .catch((err) => {
                alert(err);
                console.error(err);
            });
    }
}

export default App;
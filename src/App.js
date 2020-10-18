import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './Redux/CounterStore';
import Counter from './Components/Counter';
import CounterButtons from "./Components/CounterButtons";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Counter/>
                <CounterButtons/>
            </Provider>
        )
    }
}

export default App;
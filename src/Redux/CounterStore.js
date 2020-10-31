import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../Reducer/CounterReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(
    applyMiddleware()
);
const store = createStore(reducer, enhancer);

export default store;
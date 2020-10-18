import {createStore} from 'redux';
import reducer from '../Reducer/CounterReducer';

const store = createStore(reducer);

export default store;
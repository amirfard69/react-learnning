import {createStore, combineReducers} from "redux";
import * as Action from "./redux-test-actions";
import * as Action2 from './redux-test-actions2';
import reducer1 from './redux-test';
import reducer2 from './redux-test-2';

const reducer = combineReducers({
    reducer1: reducer1,
    reducer2: reducer2,
});
const store = createStore(reducer);

console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(Action.testAction());
store.dispatch(Action.testAction2());
store.dispatch(Action.testAction3('javad'));

store.dispatch(Action2.testActionAA());
store.dispatch(Action2.testAction2AA());
store.dispatch(Action2.testAction3AA('hosseinzade'));
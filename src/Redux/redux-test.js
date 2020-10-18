import * as Action from './redux-test-actions';

const init_state = {
    name: 'ehsan'
};
const reducer = (state = init_state, action) => {
    if (action.type === Action.textActionTitle) {
        return {...state, name: 'hassan'}
    }
    if (action.type === Action.textActionTitle2) {
        return {...state, name: 'reza'}
    }
    if (action.type === Action.textActionTitle3) {
        return {...state, name: action.value}
    }
    return state;
};
export default reducer;
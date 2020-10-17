import * as Action from './redux-test-actions2';

const init_state = {
    name: 'amir'
};
const reducer = (state = init_state, action) => {
    if (action.type === Action.textActionTitleAA) {
        return {...state, name: 'sinus'}
    }
    if (action.type === Action.textActionTitle2AA) {
        return {...state, name: 'cosinus'}
    }
    if (action.type === Action.textActionTitle3AA) {
        return {...state, name: action.value}
    }
    return state;
};
export default reducer;
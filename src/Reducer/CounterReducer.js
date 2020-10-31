const initStore = {count: 1};

const Add = 'ADD';
const Minus = 'MINUS';
const AddFunc = (val) => ({type: Add, val: val});
const MinusFunc = (val) => ({type: Minus, val: val});
const reducer = (state = initStore, action) => {
    switch (action.type) {
        case Add:
            return ({
                ...state, count: state.count + action.val
            });
            break;
        case Minus:
            return ({
                ...state, count: state.count - action.val
            });
            break;
    }
    return state;
};

export default reducer;
export {AddFunc, MinusFunc};
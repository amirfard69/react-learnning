const initStore = {count: 1};

const Add = 'ADD';
const Minus = 'MINUS';
const AddFunc = () => ({type: Add});
const MinusFunc = () => ({type: Minus});
const reducer = (state = initStore, action) => {
    switch (action.type) {
        case Add:
            return ({
                ...state, count: state.count + 1
            });
            break;
        case Minus:
            return ({
                ...state, count: state.count - 1
            });
            break;
    }
    return state;
};

export default reducer;
export {AddFunc, MinusFunc};
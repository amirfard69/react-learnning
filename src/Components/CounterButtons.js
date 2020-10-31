import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AddFunc, MinusFunc} from '../Reducer/CounterReducer';

class CounterButtons extends Component {
    inputValue = null;

    render() {
        return (
            <div>
                <button onClick={this.props.add}>+1</button>
                <button onClick={this.props.minus}>-1</button>
                <input ref={(el) => this.inputValue = el} type="number"/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: () => dispatch(AddFunc(this.inputValue.value)),
        minus: () => dispatch(MinusFunc(this.inputValue.value))
    };
};
export default connect(null, mapDispatchToProps)(CounterButtons);
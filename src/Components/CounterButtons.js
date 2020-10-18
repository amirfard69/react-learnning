import React, {Component} from 'react';
import {connect} from 'react-redux';

class CounterButtons extends Component {
    PlusCounter = () => {
        alert('+');
    };
    MinusCounter = () => {
        alert('-');
    };

    render() {
        return (
            <div>
                <button onClick={this.PlusCounter}>+1</button>
                <button onClick={this.MinusCounter}>-1</button>
            </div>
        );
    }
}

const mapDispatchToProps = () => {
};
export default connect(null, mapDispatchToProps)(CounterButtons);
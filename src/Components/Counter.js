import React, {Component} from 'react';
import {connect} from 'react-redux';

class Counter extends Component {
    render() {
        return (
            <div>
                {this.props.count}
            </div>
        );
    }
}

const mapStatesToProps = (state) => {
    return ({
        count: state.count
    });
};
export default connect(mapStatesToProps)(Counter);
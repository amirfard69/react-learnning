import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class SinglePost extends Component {

    postId = this.props.match.params.id;

    render() {
        return (
            <div>
                <h3>The Posts:
                    {this.postId}
                </h3>
            </div>
        );
    }

}

export default withRouter(SinglePost);
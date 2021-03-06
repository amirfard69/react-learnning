import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

export default class CreatePost extends Component {
    nameInput = null;
    contentInput = null;

    submitForm = () => {
        if (this.nameInput.value.length && this.contentInput.value.length) {
            let name = this.nameInput.value.trim(),
                content = this.contentInput.value.trim(),
                data = {name, content};
            this.props.addItem(data);
            this.nameInput.value = '';
            this.contentInput.value = '';
        } else {
            alert('?');
        }
    }

    render() {
        console.log(this.props);
        const checked = true;
        const handleChange = true;
        return (
            <div>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
                <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}/>
                <h1>Add Item</h1>
                <input ref={el => this.nameInput = el}/>
                <input ref={el => this.contentInput = el}/>
                <button onClick={this.submitForm}>add</button>
            </div>
        )
    }
}
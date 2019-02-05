import React from 'react';
import axios from 'axios';

class EditPhotoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      url: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console
    this.setState({
      url: event.target.value
    });
  }

  handleSubmit(event) {
    let id = window.location.pathname;
    let endpoint = `/photos${id}`
    axios.post(endpoint, {
      url: this.state.url
    });
    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={ this.handleSubmit }>
          <label>URL to change main photo to: </label>
          <input type='url' name='url' value={ this.state.url } onChange={ this.handleChange }/>
          <br />
          <input type="submit" value="Submit" />
        </form>
    )
  }
}

export default EditPhotoForm;
import React, { Component, PropTypes } from 'react';

export default class AddListForm extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''};
  }

  render() {
    return (
      <div>
        <h3>TODOリストに追加する</h3>
        <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type='text' value={this.state.value} onChange={(e) => this.handleChange(e)} />
        <input type="submit" value="追加" />
        </form>
      </div>
    )
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
}

import React, { Component } from 'react'

class SelectOptions extends Component {

  state = {
    value: this.props.shelf
  }

  handleChange(event) {
    this.setState({ value: event.target.value})
    this.props.update(this.props.book, event.target.value)
  }

  render () {

    return (
      <select value={this.state.value} onChange={this.handleChange.bind(this)}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    )
  }
}

export default SelectOptions

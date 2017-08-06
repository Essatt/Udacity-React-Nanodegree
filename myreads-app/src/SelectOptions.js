import React, { Component } from 'react'

class SelectOptions extends Component {

  render () {

    return (
      <select value={this.props.book.shelf} onChange={event => this.props.updateShelf(this.props.book, event.target.value)}>
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

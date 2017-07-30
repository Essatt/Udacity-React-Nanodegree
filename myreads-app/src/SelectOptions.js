import React, { Component } from 'react'

class SelectOptions extends Component {

  render () {
    console.log("in select options")
    console.log(this.props)
    let bookValue = "none"
    this.props.data.map((book) => {
      if (book.id === this.props.book.id){
        bookValue = book.shelf
      } 
    })

    return (
      <select value={bookValue} onChange={event => this.props.updateShelf(this.props.book, event.target.value)}>
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

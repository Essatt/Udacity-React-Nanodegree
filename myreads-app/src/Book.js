import React, { Component } from 'react'
import SelectOptions from './SelectOptions'


class Book extends Component {
  render () {
    //set shelf to empty string for the books that dont
    //have authors
    let shelf = ""
    if (this.props.shelf){
      shelf = this.props.shelf
    }
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.imageUrl})` }}></div>
          <div className="book-shelf-changer">
            <SelectOptions
              shelf={shelf}
              updateShelf={this.props.updateShelf}
              book={this.props.book}
              data={this.props.data}
            />
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.author}</div>
      </div>
    )
  }
}

export default Book

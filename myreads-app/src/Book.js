import React, { Component } from 'react'
import SelectOptions from './SelectOptions'
import * as BooksAPI from './BooksAPI'


class Book extends Component {
  render () {
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
              shelf
              update={BooksAPI.update}
              book={this.props.book}
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

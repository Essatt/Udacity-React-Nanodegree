import React, { Component } from 'react'
import ShelfTitle from './ShelfTitle.js'
import Book from './Book.js'
import * as BooksAPI from './BooksAPI'

class Shelf extends Component {

  render(){
    const { title, type, data, updateShelf } = this.props
    return (
      <div className="bookshelf">
        <ShelfTitle title={title} />
        <div className="bookshelf-books">
          <ol className="books-grid">
            {data.filter((bookList) => {
              return bookList.shelf === type
            }).map((book) => { return (
              <li key={book.id}>
                <Book
                  title={book.title}
                  author={BooksAPI.authorNames(book.authors)}
                  imageUrl={book.imageLinks.smallThumbnail}
                  shelf={book.shelf}
                  book={book}
                  updateShelf={updateShelf}
                  data={data}
                />
              </li>
            )})}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf

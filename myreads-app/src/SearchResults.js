import React from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

const SearchResults = (props) => {
  let authors = []
  return (
    <div className="search-books-results">
      <ol className="books-grid"></ol>
      {props.results.map((book) => { return (
        <li key={book.id}>
          {
            authors = (book.authors ? book.authors : authors)
          }
          <Book
            title={book.title}
            author={BooksAPI.authorNames(authors)}
            imageUrl={book.imageLinks.smallThumbnail}
            book={book}
            updateShelf={props.updateShelf}
          />
        </li>
      )})}
    </div>
  )
}

export default SearchResults

import React from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

const SearchResults = (props) => {
  let authors = []
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {props.results.map((book) => { return (
          <li key={book.id}>
            <Book
              title={book.title}
              author={BooksAPI.authorNames(book.authors ? book.authors : authors)}
              imageUrl={book.imageLinks.smallThumbnail}
              book={book}
              updateShelf={props.updateShelf}
              data={props.data}
            />
          </li>
        )})}
      </ol>

    </div>
  )
}

export default SearchResults

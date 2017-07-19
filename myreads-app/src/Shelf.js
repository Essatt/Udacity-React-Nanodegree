import React, { Component } from 'react'
import ShelfTitle from './ShelfTitle.js'
import Book from './Book.js'

class Shelf extends Component {


  authorNames(names){
    let authorNames = '';
    for (let i=0; i<names.length; i++) {
      if (names.length === 1){
        return names[0]
      }
      if (authorNames === ''){
        authorNames = names[0]
      } else if (i+2 === names.length) {
        authorNames += ' and ' + names[i]
      } else {
        authorNames += ', ' + names[i]
      }
    }
    return authorNames
  }

  render(){
    const { title, type, data } = this.props
    console.log(data)
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
                  author={this.authorNames(book.authors)}
                  imageUrl={book.imageLinks.smallThumbnail}
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

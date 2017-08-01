import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {
  state = {
    searchResults: []
  }

  search(searchTerm){

    BooksAPI.search(searchTerm, 20)
      .then((searchResults) => {
        let tempArray = [...searchResults]
        var arrayLength = tempArray.length;
        console.log("search page data update")
        console.log(this.props.data)
        console.log(tempArray)
        this.props.data.map((book) => {

          for (var i = 0; i < arrayLength; i++) {
            //console.log()
            if (tempArray[i].id === book.id){
              var person = {};
                var key = "name";

                person[key] /* this is same as person.name */ = "John";

              console.log(person);
              console.log("they are the saaaaaaaaaaaaaaaame")
              console.log(book.title + book.subtitle)
              console.log(typeof tempArray[i].shelf)
              console.log(tempArray[i].shelf)
              console.log(book.shelf)
              tempArray[i].shelf = book.shelf;
              console.log(i)
              console.log(book.id)
              console.log(tempArray[i].shelf)
              console.log(tempArray[i])
              console.log(tempArray[i].shelf)
              console.log(typeof tempArray)
            } else {
              tempArray[i].shelf = "none"
            }
          }
        })
        console.log(tempArray)




        /*this.props.data.forEach(bookOnShelf => {
          const searchResultBook = searchResults.filter(b => b.id === bookOnShelf.id);

          // check if book on shelf was returned in search results
          if (searchResultBook.length) {

            searchResultBook[0].shelf = bookOnShelf.shelf;
          }
        });*/
        console.log(this.state)
        this.setState({ searchResults: tempArray })
        console.log(this.state)
      })
      .catch((error) => {
        console.log(error)
        return error
      });
  }
  render () {
    return (
      <div className="search-books">
        <SearchBar history={this.props.history} search={this.search.bind(this)}/>
        <SearchResults
          results={this.state.searchResults}
          updateShelf={this.props.updateShelf}
          data={this.props.data}
        />
      </div>
    )
  }
}

export default SearchPage

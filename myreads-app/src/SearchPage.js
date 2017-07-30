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
        this.setState({ searchResults })
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
        />
      </div>
    )
  }
}

export default SearchPage

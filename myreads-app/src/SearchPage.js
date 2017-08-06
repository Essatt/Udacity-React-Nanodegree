import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {
  state = {
    searchResults: []
  }

  search(searchTerm) {
    BooksAPI.search(searchTerm, 20).then((searchResults) => {
      if (!searchResults || searchResults.error) {
        this.setState({ searchResults: [] });
        return;
      }

      const adjustedSearchResults = searchResults.map(searchResult => {
        const existingBook = this.props.data.find(book => book.id === searchResult.id);
        searchResult.shelf = existingBook ? existingBook.shelf : 'none';
        return searchResult;
      });

      this.setState({ searchResults: adjustedSearchResults });
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

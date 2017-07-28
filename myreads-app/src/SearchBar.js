import React, { Component } from 'react'

class SearchBar extends Component {

  state = {
    query: ''
  }

  searchQuery(query){
    this.setState({ query: query.trim() })
    this.props.search(query)
  }

  render() {
    console.log(this.props)
    return(
      <div className="search-books-bar">
        <a className="close-search" onClick={() => this.props.history.push('/')}>Close</a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={(event) => this.searchQuery(event.target.value)}
          />

        </div>
      </div>
    )
  }
}

export default SearchBar

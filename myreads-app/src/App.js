import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import PageTitle from './PageTitle'
import Shelf from './Shelf'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

class BooksApp extends Component {
  state = {
    receivedData: { }
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((receivedData) => {
      this.setState({ receivedData })
      console.log(this.state)
    })
    .catch((error) => {
      console.log(error)
      return error
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={({ history }) => (
          <div className="list-books">
            <PageTitle title='MyReads' />
            <div className="list-books-content">
              <div>
                {this.state}
                <Shelf
                  title='Currently Reading'
                  data={this.state.receivedData}
                  type='currentlyReading'
                />
                <Shelf
                  title='Want to Read'
                  data={this.state.receivedData}
                  type='wantToRead'
                />
                <Shelf
                  title='Read'
                  data={this.state.receivedData}
                  type='read'
                />
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => history.push('/search')}>Add a book</a>
            </div>
          </div>
        )}/>


        <Route path="/search" render={({ history }) => (
          <div className="search-books">
            <SearchBar history={history}/>

            <SearchResults />
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp

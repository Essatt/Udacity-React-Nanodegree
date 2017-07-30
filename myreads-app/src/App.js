import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage'
import SearchPage from './SearchPage'

class BooksApp extends Component {
  state = {
    receivedData: []
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      // set correct shelf
      book.shelf = shelf

      // filter out book if exists, re-add on correct shelf
      this.setState(state => {
        receivedData: state.receivedData.filter(b => b.id !== book.id).concat([book])
      })
    })
    console.log(this.state)
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
    console.log(this.state)
    return (
      <div className="app">
        <Route exact path="/" render={({ history }) => (
          <MainPage
            history={ history }
            data={this.state.receivedData}
            updateShelf={this.updateShelf}
          />
        )}/>

        <Route path="/search" render={({ history }) => (
          <SearchPage
            history={ history }
            updateShelf={this.updateShelf}
            data={this.state.receivedData}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp

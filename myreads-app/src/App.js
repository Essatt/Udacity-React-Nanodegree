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

  componentWillReceiveProps(newProps) {
    this.setState({ receivedData: newProps })
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
          <MainPage
            history={ history }
            data={this.state.receivedData}
          />
        )}/>

        <Route path="/search" render={({ history }) => (
          <SearchPage history={ history }/>
        )}/>
      </div>
    )
  }
}

export default BooksApp

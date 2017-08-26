import React, { Component } from 'react';
import MainPage from './MainPage'
import PostDetail from './PostDetail'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={({ history }) => (
          <MainPage />
        )}/>

        <Route path="/post" render={({ history }) => (
          <PostDetail />
        )}/>



      </div>

    );
  }
}

export default App;

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import {Provider} from 'react-redux'

import MainPage from './MainPage'
import PostDetail from './PostDetail'
import InitializeRedux from './InitializeRedux'

class App extends Component {
/*
        <Provider store={this.props.store}>
          <div>
            {mainPage}
          </div>
        </Provider>


        <Route exact path="/create" component={ManagePostForm}/>
        <Route path="/create/:id" component={ManagePostForm}/>
        <Route component={NotFound}/>
        <Route path="/404" component={NotFound}/>
        <Route path="/postdetails/:id" component={PostDetails}/>

        */

  render() {
    return (
      <Provider store={this.props.store}>
        <div className="App">
          <InitializeRedux />
          <Switch>
            <Route exact path="/" render={(props) =>
              <MainPage {...props} categories={this.props.category} />
            }/>

            <Route path="/category/:id" render={(props) => (
              <MainPage {...props} categories={this.props.category} />
            )}/>
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;

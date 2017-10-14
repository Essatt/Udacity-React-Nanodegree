import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import {connect} from 'react-redux'

import MainPage from './MainPage'
import PostDetail from './PostDetail'
import {
  initializeCategories,
  initializePost,
  initializeComment,
  normalizeStore
} from '../actions'


class App extends Component {
  componentDidMount(){
    console.log('componentDidMount')

    var myHeaders = { 'Authorization': 'esats server' }
    var myInit = { method: 'GET', headers: myHeaders}
    var api = 'http://localhost:5001'
    var id = '8xf0y6ziyjabvozdd253nd'

    //categories
    let reduxStore = fetch(`${api}/categories`, myInit)
    .then(res => res.json())
    .then(response => {
      console.log(response)
      let categories = response.categories
      let newCategories
      categories.map(newCategory => {
        newCategories = {
          ...newCategories,
          [newCategory.name]: newCategory
        }
      })
      console.log(newCategories)
      this.props.initializeCategories(newCategories)
      //console.log('APP.JS initializing categories')
      //console.log(categories)
      categories.map(category => {
        //post per categories
        fetch(`${api}/${category.path}/posts`, myInit)
        .then(res => res.json())
        .then (posts => {
          posts.map(post => {
            console.log('APP.JS initializing post')
            console.log(posts)
            console.log(post)
            if(post){
              console.log(post)
              this.props.initializePost(category.name, post)
              //comment per post
              fetch(`${api}/posts/${post.id}/comments`, myInit)
              .then(res => res.json())
              .then(comments => {
                comments.map(comment => {
                  //console.log('APP.JS initializing comment')
                  console.log(comment)
                  console.log(post)
                  if(comment){
                    this.props.initializeComment(category.name, post, comment)
                  }

                })
              })
            }
          })
        })
      })
    })
    //.then(normalizeStore())

  /*  //all posts
    fetch(`${api}/posts`, myInit).then(function(response) {
      let retunObject = response.json()
      console.log(retunObject)
      return retunObject
    });

    //comments for 1 post
    fetch(`${api}/posts/${id}/comments`, myInit).then(function(response) {
      let retunObject = response.json()
      console.log(retunObject)
      return retunObject
    });

*/

  }

  render() {
    {console.log(this.props.initialize)}
    return (
      <div>
        <Route exact path="/" render={({ history }) => (

          <MainPage data={this.props.initialize} />
        )}/>

        <Route path="/post" render={({ history }) => (
          <PostDetail  />
        )}/>
      </div>

    );
  }
}
function mapStateToProps({initialize, post, comment}) {
  return {
    initialize,
    post,
    comment
  }
}

function mapDispatchToProps(dispatch) {
  return {
    initializeCategories: (data) => dispatch(initializeCategories(data)),
    initializePost: (category, post) => dispatch(initializePost(category, post)),
    initializeComment: (category, post, comment) => dispatch(initializeComment(category, post, comment)),
    normalizeStore: (data) => dispatch(normalizeStore(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

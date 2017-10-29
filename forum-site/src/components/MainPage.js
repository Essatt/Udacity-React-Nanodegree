import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Grid from 'react-bootstrap/lib/Grid'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import '../App.css'
import ArrowUp from 'react-icons/lib/fa/arrow-up'
import ArrowDown from 'react-icons/lib/fa/arrow-down'
import Comments from 'react-icons/lib/fa/comments'
import SortDown from 'react-icons/lib/fa/sort-desc'
import Edit from 'react-icons/lib/fa/edit'
import Delete from 'react-icons/lib/fa/trash'
import Add from 'react-icons/lib/fa/plus-circle'
import {
  sortPosts,
  addPost,
  editPost,
  incrementPost,
  decrementPost,
  deletePost
} from '../actions'

//TODO cant access post details page (it reroutes to edit)
//TODO cant click on post to go to post details
//TODO deal with deleted posts and comments
//TODO increment decrement posts
//TODO DELETE posts

class MainPage extends Component {

  getCategories () {
    var categories = []
    console.log(this.props.categories)
    for(let category in this.props.categories){
      let url = `/${category}`
      categories.push(
        <ListGroupItem key={category}>
          <Link to={url}>
            {category}
          </Link>
        </ListGroupItem>
      )
    }
    console.log(categories)
    return categories
  }

  getPosts () {
    var postArray = []
    console.log(this.props)
    if (Object.keys(this.props.posts).length === 0 && this.props.posts.constructor === Object){
    }else{
      this.props.posts.filter((post) => {
        if(this.props.match.params.id !== null && this.props.match.params.id !== undefined){
          return post.category == this.props.match.params.id
        }else{
          return post
        }
      })
      .map((post) => {
        var commentsArray = []
        if (Object.keys(this.props.comments).length === 0 && this.props.comments.constructor === Object){
        }else{
          this.props.comments.map((comment) => {
            if (comment.parentId === post.id){
              commentsArray.push(comment)
            }
          })
          postArray.push(
            <ListGroupItem key={post.id}>
              <Link to={'/' + post.category + '/' + post.id}>
                <Row className="show-grid" >
                  <Col xs={4} md={4} lg={4} >
                    <div style={{textAlign: 'left'}}>
                      <span className='PostTitle' >{post.title}</span> by {post.author}
                    </div>

                  </Col>
                  <Col style={{textAlign: 'center'}} xs={2} md={2} lg={2} >
                    <Comments /> {commentsArray.length}
                  </Col>
                  <Col style={{textAlign: 'center'}} xs={2} md={2} lg={2} >
                    <ArrowUp /> {post.voteScore} <ArrowDown />
                  </Col>
                  <Col style={{textAlign: 'center'}} xs={2} md={2} lg={2} >
                    <Edit />
                  </Col>
                  <Col style={{textAlign: 'center'}} xs={2} md={2} lg={2} >
                    <Delete />
                  </Col>
                </Row>
              </Link>
            </ListGroupItem>
          )
        }
      })
    }

    return postArray

  }

  handleSortByDate(){
    console.log(this.props)
    if (Object.keys(this.props.postSort).length === 0 && this.props.postSort.constructor === Object){
      this.props.sortPosts ("date", "ASC")
    }else{
      if(this.props.postSort.sortBy !== "date"){
        this.props.sortPosts ("date", "ASC")
      }else{
        if(this.props.postSort.way !== "ASC"){
          this.props.sortPosts ("date", "ASC")
        }else{
          this.props.sortPosts ("date", "DESC")
        }
      }
    }
  }

  handleSortByScore(){
    console.log(this.props)
    if (Object.keys(this.props.postSort).length === 0 && this.props.postSort.constructor === Object){
      this.props.sortPosts ("score", "ASC")
    }else{
      if(this.props.postSort.sortBy !== "score"){
        this.props.sortPosts ("score", "ASC")
      }else{
        if(this.props.postSort.way !== "ASC"){
          this.props.sortPosts ("score", "ASC")
        }else{
          this.props.sortPosts ("score", "DESC")
        }
      }
    }
  }

  handleAddPost(){
    this.props.history.push(`/create`)
  }

  render() {
    var categories = this.getCategories()
    var posts = this.getPosts()
    var currentLocation = window.location.href
    console.log(this.props)
    console.log(currentLocation)
    return (
      <div>
        {// Headers -->
        }
        <Grid style={{paddingTop:'5px'}}>
          <Row className="show-grid">
            <Col xs={3} md={3} >
              <h1>Categories</h1>
            </Col>
            <Col xs={3} md={3} >
              <h1>Posts</h1>
            </Col>
            <Col style={{paddingTop:25, textAlign: 'right'}} xs={2} >
              <button onClick={this.handleAddPost.bind(this)}>
                <h4 >
                  Add <Add size={27} style={{paddingBottom:5}}/>
                </h4>
              </button>
            </Col>
            <Col style={{paddingTop:25, textAlign: 'right'}} xs={2} >
              <button onClick={this.handleSortByScore.bind(this)}>
                <h4>
                  Sort By Score <SortDown style={{verticalAlign: 'center'}}/>
                </h4>
              </button>
            </Col>
            <Col style={{paddingTop:25, textAlign: 'right'}} xs={2} >
              <button onClick={this.handleSortByDate.bind(this)}>
                <h4>
                  Sort By Date <SortDown style={{verticalAlign: 'center'}}/>
                </h4>
              </button>
            </Col>
          </Row>
          {//<-- Headers End
          }

          <Row className="show-grid" style={{paddingTop:'5px'}}>
            <Col xs={4} md={3} >
              <ListGroup>
                {categories}
              </ListGroup>
            </Col>
            <Col xs={8} md={9} >
              <ListGroup>
                {posts}
              </ListGroup>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({post, comment, postSort, category}) {
  console.log(this.props)
  var postL
  if (Object.keys(postSort).length === 0 && postSort.constructor === Object){
    postL = post
  }else if(postSort.sortBy === "date"){
    if (postSort.way === "ASC"){
      postL = post.sort(function(a, b){
        return a.timestamp-b.timestamp
      })
      console.log(postL)
    }else if (postSort.way === "DESC"){
      postL = post.sort(function(a, b){
        return b.timestamp-a.timestamp
      })
      console.log(postL)
    }
  }else if(postSort.sortBy === "score"){
    if (postSort.way === "ASC"){
      postL = post.sort(function(a, b){
        return a.voteScore-b.voteScore
      })
      console.log(postL)
    }else if (postSort.way === "DESC"){
      postL= post.sort(function(a, b){
        return b.voteScore-a.voteScore
      })
    }
  }else{
    postL = post
  }

  return {
    posts: postL,
    postSort,
    comments: comment,
    categories: category
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sortPosts: (sortBy, way) => dispatch(sortPosts(sortBy, way)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPage)

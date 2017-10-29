import React, { Component } from 'react';
import {connect} from 'react-redux'
import moment from 'moment'

import ArrowUp from 'react-icons/lib/fa/arrow-up'
import ArrowDown from 'react-icons/lib/fa/arrow-down'
//import Comments from 'react-icons/lib/fa/comments'
import SortDown from 'react-icons/lib/fa/sort-desc'
import Edit from 'react-icons/lib/fa/edit'
import Delete from 'react-icons/lib/fa/trash'
import Add from 'react-icons/lib/fa/plus-circle'
import Grid from 'react-bootstrap/lib/Grid'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import Button from 'react-bootstrap/lib/Button'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import {
  sortComments,
  addComment,
  editComment,
  incrementPost,
  incrementComment,
  decrementPost,
  decrementComment,
  deletePost,
  deleteComment,
  editPost
} from '../actions'

//TODO cant click on post to go to post details
//TODO deal with deleted posts and comments
//TODO increment decrement comment
//TODO Edit comment
//TODO ADD comment
//TODO DELETE posts
//TODO DELETE comment

class PostDetail extends Component {

  state = {
    myHeaders: { 'Authorization': 'esats server' },
    api: 'http://localhost:5001'
  }

  componentDidMount(){
    this.checkIfCategoryTrue()
  }
  componentWillReceiveProps(){
    this.checkIfCategoryTrue()
  }

  checkIfCategoryTrue(){
    console.log("in the checking")
    console.log(this.props)
    if(typeof this.props.post !== 'undefined' && this.props.post.length > 0) {
      console.log("its legit")
      console.log(this.props.match.params.category)
      this.props.post.filter((post) => {
        console.log(post)
        console.log(this.props.match.params)
        return post.id == this.props.match.params.id
      }).map((post) => {
        console.log(post.category)
        if(this.props.match.params.category != post.category ){
          this.props.history.push(`/404`)
        }
      })
    }
  }

  handleEditPost(id){
    this.props.history.push(`/post/edit/${id}`)
  }

  handleDeletePost(){

  }

  handleEditComment(){

  }

  handleDeleteComment(){

  }

  handleCreateComment(){

  }

  incrementPostScore(id){
    const {api, myHeaders} = this.state
    let params = {
      method: 'POST',
      headers: myHeaders,
      body: 'option=upVote'
    }
    //this.props.incrementComment(id)
    console.log(`${api}/posts/${id}`)
    fetch(`${api}/posts/${id}`, params
    ).then(resp => resp.json())
    .then(responses => {
      console.log(responses)
    })

    let params1 = {
      method: 'GET',
      headers: myHeaders,
    }

    fetch(`${api}/posts/${id}`, params1
    ).then(resp => resp.json())
    .then(responses => {
      console.log(responses)
    })

  }

  incrementCommentScore(id){
    const {api, myHeaders} = this.state
    console.log(api)
    console.log(myHeaders)
    console.log(id)

    let params = {
      method: 'POST',
      headers: myHeaders,
      body: 'option=upVote'
    }
    this.props.incrementComment(id)
    console.log(`${api}/comments/${id}`)
    fetch(`${api}/comments/${id}`, params
    ).then(resp => resp.json())
    .then(responses => {
      console.log(responses)
    })

    let params1 = {
      method: 'GET',
      headers: myHeaders,
    }

    fetch(`${api}/comments/${id}`, params1
    ).then(resp => resp.json())
    .then(responses => {
      console.log(responses)
    })

  }

  getPostDetail(){
    console.log(this.props)
    var localPost
    var postFilter
    if (Object.keys(this.props.post).length === 0 && this.props.post.constructor === Object){

    }else{
      console.log(this.props.post)
      postFilter = this.props.post.filter((postL) => {
        console.log(postL)
        if(this.props.match.params.id !== null && this.props.match.params.id !== undefined){

          return postL.id === this.props.match.params.id
        }else{

          return postL
        }
      }).map((post) => {
        var time = moment(post.timestamp).format('MMMM Do YYYY');
        var comment = this.getComments(post)
        localPost =
          <div>
            <Row className="show-grid">
              <Col xs={6} >
                <span style={{fontSize: 30, fontWeight: 700}}>
                  {`${post.title} `}
                </span>
                <span style={{fontSize: 25, fontWeight: 600}}>
                   {`by ${post.author}`}
                </span>
              </Col>
              <div style={{paddingTop: 17}}>
                <Col xs={2} >
                  <button onClick={() => this.incrementPostScore(post.id)}>
                    <ArrowUp />
                  </button>
                  {` ${post.voteScore} `}
                  <button onClick={() => this.decrementPostScore(post.id)}>
                    <ArrowDown />
                  </button>
                </Col>
                <Col xs={2} >
                  {time}
                </Col>
                <Col xs={1} >
                  <button onClick={() => this.handleEditPost(post.id)}>
                    <Edit />
                  </button>
                </Col>
                <Col xs={1} >
                  <button  onClick={() => this.handleDeletePost(post.id)}>
                    <Delete />
                  </button>

                </Col>
              </div>
            </Row>

            <Row className="show-grid">
              <ListGroup>
                <ListGroupItem>
                  {`${post.body}`}
                </ListGroupItem>
              </ListGroup>
            </Row>
            {comment}
        </div>
      })
      if (localPost === undefined){
        this.props.history.push('/404')
      }
      return localPost
    }
  }

  getComments(post){
    var commentArray = []
    console.log(this.props)
    if (Object.keys(this.props.comment).length === 0 && this.props.comment.constructor === Object){

    }else{
      console.log('in the elssseeeee')
      let commentsFilter = this.props.comment.filter((commentL) => {
        return post.id === commentL.parentId
      })
      console.log(commentsFilter)
      commentArray.push(
        <Row>
          <Col xs={6} >
            <span style={{fontSize: 25, fontWeight: 600}}>
              {`Comments ${commentsFilter.length}`}
            </span>
          </Col>
          <Col xs={2} >
            <button onClick={() => this.handleCreateComment(post.id)}>
              <h4 >
                Add <Add size='20' style={{verticalAlign: 'bottom', paddingBottom:-15}} />
              </h4>
            </button>
          </Col>

          <Col xs={2} >
            <button onClick={this.handleSortByScore.bind(this)}>
              <h4>
                Sort By Date <SortDown style={{verticalAlign: 'center'}}/>
              </h4>
            </button>
          </Col>
          <Col xs={2} >
            <button onClick={this.handleSortByDate.bind(this)}>
              <h4 >
                Sort By Score <SortDown style={{verticalAlign: 'center'}}/>
              </h4>
            </button>
          </Col>


        </Row>
      )
      commentsFilter.map((comment) => {
        commentArray.push(
          <ListGroup>
            <ListGroupItem>
              <Row>
                <Col xs={8}>
                  <b>
                    {`Author: ${comment.author}`}
                  </b>
                </Col>
                <Col xs={2}>
                  <button onClick={this.incrementCommentScore.bind(this, comment.id)}>
                    <ArrowUp />
                  </button>
                  {` ${comment.voteScore} `}
                  <button onClick={() => this.decrementCommentScore(comment.id)}>
                    <ArrowDown />
                  </button>

                </Col>
                <Col xs={1} >
                  <button onClick={() => this.handleEditComment(comment.id)}>
                    <Edit />
                  </button>
                </Col>
                <Col xs={1} >
                  <button onClick={() => this.handleDeleteComment(comment.id)}>
                    <Delete />
                  </button>
                </Col>
              </Row>
            <Row style={{paddingRight:15, paddingLeft:15, textAlign:'left'}}>
              {comment.body}
            </Row>
            </ListGroupItem>
          </ListGroup>
        )
      })
    }
    return commentArray
  }

  handleSortByDate(){
    console.log(this.props)
    if (Object.keys(this.props.commentSort).length === 0 && this.props.commentSort.constructor === Object){
      this.props.sortComments ("date", "ASC")
    }else{
      if(this.props.commentSort.sortBy !== "date"){
        this.props.sortComments ("date", "ASC")
      }else{
        if(this.props.commentSort.way !== "ASC"){
          this.props.sortComments ("date", "ASC")
        }else{
          this.props.sortComments ("date", "DESC")
        }
      }
    }
  }

  handleSortByScore(){
    console.log(this.props)
    if (Object.keys(this.props.commentSort).length === 0 && this.props.commentSort.constructor === Object){
      this.props.sortComments ("score", "ASC")
    }else{
      if(this.props.commentSort.sortBy !== "score"){
        this.props.sortComments ("score", "ASC")
      }else{
        if(this.props.commentSort.way !== "ASC"){
          this.props.sortComments ("score", "ASC")
        }else{
          this.props.sortComments ("score", "DESC")
        }
      }
    }
  }

  render() {
    let post = this.getPostDetail()
    return (
      <div>
        <Grid style={{paddingTop:'5px', textAlign: 'left'}}>
        {post}
        </Grid>
      </div>

    );
  }
}

function mapStateToProps({post, comment, commentSort}) {
  var commentL
  if (Object.keys(commentSort).length === 0 && commentSort.constructor === Object){
    commentL = comment
  }else if(commentSort.sortBy === "date"){
    if (commentSort.way === "ASC"){
      commentL= comment.sort(function(a, b){
        return a.timestamp-b.timestamp
      })
    }else if (commentSort.way === "DESC"){
      commentL= comment.sort(function(a, b){
        return b.timestamp-a.timestamp
      })
    }
  }else if(commentSort.sortBy === "score"){
    if (commentSort.way === "ASC"){
      commentL= comment.sort(function(a, b){
        return a.voteScore-b.voteScore
      })
    }else if (commentSort.way === "DESC"){
      commentL= comment.sort(function(a, b){
        return b.voteScore-a.voteScore
      })
    }
  }else{
    commentL = comment
  }

  console.log(commentL)

  return {
    comment: commentL,
    commentSort,
    post
  }
}

function mapDispatchToProps(dispatch){
  return {
    sortComments: (sortBy, way) => dispatch(sortComments(sortBy, way)),
    incrementPost: (id) => dispatch(incrementPost(id)),
    decrementPost: (id) => dispatch(decrementPost(id)),
    incrementComment: (id) => dispatch(incrementComment(id)),
    decrementComment: (id) => dispatch(decrementComment(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);

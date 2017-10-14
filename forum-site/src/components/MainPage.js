import React, { Component } from 'react';
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

class MainPage extends Component {

   getCategories () {
    var categories = []
    for(let category in this.props.data.categories){
      categories.push(
        <ListGroupItem key={category}>
          {category}
        </ListGroupItem>
      )
    }
    return categories
  }

  getPosts () {
    var postArray = []
    for(let category in this.props.data.categories){
      for (let id in this.props.data.categories[category].posts){
        var post =this.props.data.categories[category].posts[id].post
          console.log(post)
          var commentsArray = []
          for(let comments1 in this.props.data.categories[category].posts[id].comments){
            commentsArray.push(comments1)
          }
          console.log(post)
          postArray.push(
            <ListGroupItem key={post.id}>
              <Row className="show-grid" >
                <Col xs={4} md={4} lg={4} >
                  <span className='PostTitle' >{post.title}</span> by {post.author}
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
            </ListGroupItem>
          )

      }
    }
    return postArray
  }

  render() {
    var categories = this.getCategories()
    var posts = this.getPosts()
    return (
      <div>
        {// Headers -->
        }
        <Grid style={{paddingTop:'5px'}}>
          <Row className="show-grid">
            <Col xs={4} md={3} >
              <h1>Categories</h1>
            </Col>
            <Col xs={4} md={5} >
              <h1>Posts</h1>
            </Col>
            <Col style={{paddingTop:12, textAlign: 'right'}} xs={2} >
              <h3 >
                Add <Add size={35} style={{paddingBottom:5}}/>
              </h3>
            </Col>
            <Col style={{paddingTop:10, textAlign: 'right'}} xs={2} >
              <h3>
                Sort By <SortDown style={{verticalAlign: 'center'}}/>
              </h3>
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
                <ListGroupItem>Post 2</ListGroupItem>
                <ListGroupItem>...</ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Grid>
      </div>

    );
  }
}


export default MainPage

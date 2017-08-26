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
  render() {
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


          <Row className="show-grid" style={{paddingTop:'5px'}}>
            <Col xs={4} md={3} >
              <ListGroup>
                <ListGroupItem>
                  Category 1
                </ListGroupItem>
                <ListGroupItem>Category 2</ListGroupItem>
                <ListGroupItem>...</ListGroupItem>
              </ListGroup>
            </Col>
            <Col xs={8} md={9} >
              <ListGroup>
                <ListGroupItem>
                    <Row className="show-grid" >
                      <Col xs={4} md={4} lg={4} >
                        <span className='PostTitle' >Title</span> by Author
                      </Col>
                      <Col style={{textAlign: 'center'}} xs={2} md={2} lg={2} >
                        <Comments /> 5
                      </Col>
                      <Col style={{textAlign: 'center'}} xs={2} md={2} lg={2} >
                        <ArrowUp /> 15 <ArrowDown />
                      </Col>
                      <Col style={{textAlign: 'center'}} xs={2} md={2} lg={2} >
                        <Edit />
                      </Col>
                      <Col style={{textAlign: 'center'}} xs={2} md={2} lg={2} >
                        <Delete />
                      </Col>
                    </Row>
                </ListGroupItem>
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

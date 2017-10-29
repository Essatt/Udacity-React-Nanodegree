import React, {Component} from 'react'
import {connect} from 'react-redux'

import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import HelpBlock from 'react-bootstrap/lib/HelpBlock'
import Grid from 'react-bootstrap/lib/Grid'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import Button from 'react-bootstrap/lib/Button'

import FieldGroup from './FieldGroup'

import {
  addPost,
  editPost
} from '../actions'

//TODO submit the edit changes to redux
//TODO create post

class ManagePostForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: null,
      body: "",
      title: "",
      author: "",
      type: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  componentDidMount(){
    if(this.props.match.params.id !== null && this.props.match.params.id !== undefined){
      console.log("it went the other way")
      this.setState(() => ({id: this.props.match.params.id, type: 'edit'}))
      this.getPostDetails(this.props)
    }else{
      console.log('it made errthing null')
      this.setState(() => ({id: null, type: ''}))

    }
  }

  componentWillReceiveProps(newProps){
    console.log('recieve props bro')
    console.log(newProps)
    this.getPostDetails(newProps)
  }

  getPostDetails(props){
    console.log('in get post details')
    console.log(props)
    if (Object.keys(props.post).length === 0 && props.post.constructor === Object){
      console.log('damn the null')
    }else{
      console.log('ACTUALLY GETTING THE POSTTSSS')
      props.post.filter((postL) => {
        console.log(postL)
        return postL.id === props.match.params.id
      }).map((post) =>{
        this.setState(() => (
          {
            body: post.body,
            author: post.author,
            title: post.title,
            category: post.category
          }
        ))
      })
    }

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(){

  }

  render(){
    let intro = this.state.type == '' ? 'Create Post' : 'Edit Post'
    console.log(this.props)
    console.log(this.state)
    let buttonText = this.state.type == '' ? 'Create Post' : 'Save Post'
    return(
      <form onSubmit={this.handleSubmit}>
        <Grid style={{paddingTop:'5px', textAlign: 'left'}}>
          <Row>
            <h3>
              {intro}
            </h3>
          </Row>
          <Row className="show-grid">
            <FieldGroup
              id="postAuthor"
              type="text"
              label="Author"
              placeholder="Author's Name..."
              name="author"
              value={this.state.author}
              onChange={this.handleInputChange}
            />
          </Row>
          <Row>
            <FieldGroup
              id="postTitle"
              type="text"
              label="Title"
              placeholder="Title..."
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </Row>

          <Row>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Body</ControlLabel>
              <FormControl
                name="body"
                value={this.state.body}
                componentClass="textarea"
                placeholder="The body of the post..."
                onChange={this.handleInputChange} />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Select</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="react">React</option>
                <option value="redux">Redux</option>
                <option value="udacity">Udacity</option>
              </FormControl>
            </FormGroup>
          </Row>

          <Row>
            <Button type="submit" onClick={this.handleSubmit}>
              {buttonText}
            </Button>
          </Row>
        </Grid>
      </form>
    )
  }
}

function mapStateToProps({post}){
  console.log(post)
  return {post}
}

function mapDispatchToProps(dispatch){
  return {
    editPost: (data) => dispatch(editPost(data)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ManagePostForm);

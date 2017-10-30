import {combineReducers} from 'redux'

import {
  INCREMENT_POST,
  DECREMENT_POST,
  INCREMENT_COMMENT,
  DECREMENT_COMMENT,
  EDIT_POST,
  EDIT_COMMENT,
  DELETE_POST,
  DELETE_COMMENT,
  ADD_POST,
  ADD_COMMENT,
  INITIALIZE_CATEGORIES,
  INITIALIZE_POSTS,
  INITIALIZE_COMMENTS,
  SORT_COMMENTS_BY,
  SORT_POSTS_BY
} from '../actions'

function category (state={}, action) {
  const { categories, category, post={}, comment } = action

  switch (action.type) {
    case INITIALIZE_CATEGORIES:
      return categories;

    default:
      return state
  }
}

function post (state = {}, action) {
  var index
  var postIndex
  var returnValue
  const {id, timestamp, title, body, author, category} = action

  switch (action.type) {
    case INITIALIZE_POSTS:
      return action.posts

    case INCREMENT_POST:

      postIndex = state.filter((post, indexL) => {
        if (post.id === action.pid){
          index = indexL
        }
        return post.id === action.pid
      })

      returnValue = [...state]
      returnValue[index].voteScore += 1
      return returnValue

    case DECREMENT_POST:
      index
      postIndex = state.filter((post, indexL) => {
        if (post.id === action.pid){
          index = indexL
        }
        return post.id === action.pid
      })

      returnValue = [...state]
      returnValue[index].voteScore -= 1
      return returnValue

    case EDIT_POST:
      returnValue = [...state]
      index
      postIndex = state.filter((post, indexL) => {
        if (post.id === action.pid){
          index = indexL
        }
        return post.id === action.pid
      })
      returnValue[index].title = title
      returnValue[index].body = body
      return returnValue

    case DELETE_POST:
      index
      postIndex = state.filter((post, indexL) => {
        if (post.id === action.pid){
          index = indexL
        }
        return post.id === action.pid
      })

      returnValue = [...state]
      returnValue[index].deleted = true
      return returnValue

    case ADD_POST:
      returnValue = [...state]
      returnValue.push({
        id,
        timestamp,
        title,
        body,
        author,
        category,
        voteScore: 0,
        deleted: false
      })
      return returnValue

    default:
      return state
  }
}

function comment (state = {}, action) {
  var index
  var commentIndex
  var returnValue

  switch (action.type) {
    case INITIALIZE_COMMENTS:
      returnValue = [...state]
      action.comments.map((comment) => {
        returnValue = [...returnValue, comment]
      })

      return returnValue

    case INCREMENT_COMMENT:
      commentIndex = state.filter((comment, indexL) => {
        if (comment.id === action.cid){
          index = indexL
        }
        return comment.id === action.cid
      })

      returnValue = [...state]
      returnValue[index].voteScore += 1
      return returnValue

    case DECREMENT_COMMENT:
      commentIndex = state.filter((comment, indexL) => {
        if (comment.id === action.cid){
          index = indexL
        }
        return comment.id === action.cid
      })

      returnValue = [...state]
      returnValue[index].voteScore -= 1
      return returnValue

    case EDIT_COMMENT:
      const {timestamp, body} = action
       commentIndex = state.filter((comment, indexL) => {
        if (comment.id === action.cid){
          index = indexL
        }
        return comment.id === action.cid
      })

      returnValue = [...state]
      returnValue[index].timestamp = timestamp
      returnValue[index].body = body
      return returnValue

    case DELETE_COMMENT:
      commentIndex = state.filter((comment, indexL) => {
        if (comment.id === action.cid){
          index = indexL
        }
        return comment.id === action.cid
      })

      returnValue = [...state]
      returnValue[index].deleted = true
      return returnValue

    case ADD_COMMENT:
      return state

    default:
      return state
  }
}

function commentSort (state = {}, action) {

  switch (action.type) {
    case SORT_COMMENTS_BY:
        return {
          sortBy: action.sortBy,
          way: action.way
        }

    default:
      return state
  }
}

function postSort (state = {}, action) {

  switch (action.type) {
    case SORT_POSTS_BY:
      return {
        sortBy: action.sortBy,
        way: action.way
      }

    default:
      return state
  }
}

export default combineReducers({category, post, comment, postSort, commentSort})

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
  let returnValue

  switch (action.type) {
    case INITIALIZE_CATEGORIES:
      return categories;

    default:
      return state
  }
}



function post (state = {}, action) {

  switch (action.type) {
    case INITIALIZE_POSTS:
      return action.posts

    case INCREMENT_POST:
      return state

    case DECREMENT_POST:
      return state

    case EDIT_POST:
      return state

    case DELETE_POST:
      return state

    case ADD_POST:
      return state

    default:
      return state
  }
}

function comment (state = {}, action) {

  switch (action.type) {
    case INITIALIZE_COMMENTS:
      var returnValue = [...state]
      action.comments.map((comment) => {
        returnValue = [...returnValue, comment]
      })

      return returnValue

    case INCREMENT_COMMENT:
      return state

    case DECREMENT_COMMENT:
      return state

    case EDIT_COMMENT:
      return state

    case DELETE_COMMENT:
      return state

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

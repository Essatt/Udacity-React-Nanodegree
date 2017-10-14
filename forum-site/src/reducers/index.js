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
  INITIALIZE_POST,
  INITIALIZE_COMMENT,
  NORMALIZE_STORE
} from '../actions'

function initialize (state={}, action) {
  console.log('CAME TO INITIALIZE REDUCER')
  console.log(action)
  const { categories, category, post={}, comment } = action
  let returnValue
  switch (action.type) {
    case INITIALIZE_CATEGORIES:
      //console.log("REDUCER initializeCategories reducer ran")

      returnValue = {
        ...state,
          categories
      }
      //console.log(returnValue)
      return returnValue;


    case INITIALIZE_POST:
      console.log("REDUCER INITIALIZE_POST reducer ran")
      returnValue = {
        ...state,
          categories: {
            ...state.categories,
              [category]: {
                ...state.categories[category],
                posts: {
                  ...state.categories[category].posts,
                  [post.id]: {
                    post
                  }
                }
              }
          }
      }
      console.log(returnValue)
      return returnValue

    case INITIALIZE_COMMENT:
      console.log("REDUCER INITIALIZE_COMMENT reducer ran")
      console.log(post)
      returnValue = {
        ...state,
          categories: {
            ...state.categories,
              [category]: {
                ...state.categories[category],
                posts: {
                  ...state.categories[category].posts,
                  [post.id]: {
                    ...state.categories[category].posts[post.id],
                    comments: {
                      ...state.categories[category].posts[post.id].comments,
                        [comment.id]: {
                          comment
                        }
                    }

                  }
                }
              }
          }
      }
      console.log(returnValue)
      return returnValue

    case NORMALIZE_STORE:
      //console.log("REDUCER NORMALIZE_STORE reducer ran")
      return state

    default:
      return state
  }
}



function post (state = {}, action) {
  console.log('CAME TO POST REDUCER')
  switch (action.type) {
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
  console.log('CAME TO COMMENT REDUCER')
  switch (action.type) {
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

export default combineReducers({initialize, post, comment})

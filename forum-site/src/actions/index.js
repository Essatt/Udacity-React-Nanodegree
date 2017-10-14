export const INCREMENT_POST = 'INCREMENT_POST'
export const DECREMENT_POST = 'DECREMENT_POST'
export const INCREMENT_COMMENT = 'INCREMENT_COMMENT'
export const DECREMENT_COMMENT = 'DECREMENT_COMMENT'
export const EDIT_POST = 'EDIT_POST'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_POST = 'DELETE_POST'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const ADD_POST = 'DELETE_POST'
export const ADD_COMMENT = 'DELETE_COMMENT'
export const INITIALIZE_CATEGORIES = 'INITIALIZE_CATEGORIES'
export const INITIALIZE_POST = 'INITIALIZE_POST'
export const INITIALIZE_COMMENT = 'INITIALIZE_COMMENT'
export const NORMALIZE_STORE = 'NORMALIZE_STORE'

//SORT Posts
//SORT Comments
//FILTER Posts by category

export function initializeCategories (categories) {
  //console.log("ACTIONS initializeCategories ran")
  //console.log(categories)
  return {type: INITIALIZE_CATEGORIES, categories}
}

export function initializePost (category, post) {
  console.log(post)
  console.log(category)
  //console.log("ACTIONS initializePost action ran")
  return {type: INITIALIZE_POST, category, post}
}

export function initializeComment (category, post, comment) {
  //console.log("ACTIONS initializeComment action ran"
  return {type: INITIALIZE_COMMENT,category, post, comment}
}

export function normalizeStore () {
  //console.log("ACTIONS normalizeStore action ran")
  return {type: NORMALIZE_STORE}
}



export function incrementPost (pid, vScore) {
  return {type: INCREMENT_POST, pid, vScore}
}

export function decrementPost (pid, vScore) {
  return {type: DECREMENT_POST, pid, vScore}
}

export function editPost (pid, post) {
  return {type: EDIT_POST, pid, post}
}

export function deletePost (pid) {
  return {type: DELETE_POST, pid}
}

export function addPost (post) {
  return {type: ADD_POST, post}
}




export function incrementComment (cid, vScore) {
  return {type: INCREMENT_COMMENT, cid, vScore}
}

export function decrementComment (cid, vScore) {
  return {type: DECREMENT_COMMENT, cid, vScore}
}

export function editComment (cid, comment) {
  return {type: EDIT_COMMENT, cid, comment}
}

export function deleteComment (cid) {
  return {type: DELETE_COMMENT, cid}
}

export function addComment (comment) {
  return {type: ADD_COMMENT, comment}
}

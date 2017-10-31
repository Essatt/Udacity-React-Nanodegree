export const INCREMENT_POST = 'INCREMENT_POST'
export const DECREMENT_POST = 'DECREMENT_POST'
export const INCREMENT_COMMENT = 'INCREMENT_COMMENT'
export const DECREMENT_COMMENT = 'DECREMENT_COMMENT'
export const EDIT_POST = 'EDIT_POST'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_POST = 'DELETE_POST'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const ADD_POST = 'ADD_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const INITIALIZE_CATEGORIES = 'INITIALIZE_CATEGORIES'
export const INITIALIZE_POSTS = 'INITIALIZE_POSTS'
export const INITIALIZE_COMMENTS = 'INITIALIZE_COMMENTS'
export const SORT_COMMENTS_BY = 'SORT_COMMENTS_BY'
export const SORT_POSTS_BY = 'SORT_POSTS_BY'
//FILTER Posts by category

export function sortPosts(sortBy, way) {
  return {type: SORT_POSTS_BY, sortBy, way}
}

export function sortComments(sortBy, way) {
  return {type: SORT_COMMENTS_BY, sortBy, way}
}

export function initializePosts(posts){
  return {type: INITIALIZE_POSTS, posts}
}

export function initializeComments(comments){
  return {type: INITIALIZE_COMMENTS, comments}
}

export function initializeCategories (categories) {
  return {type: INITIALIZE_CATEGORIES, categories}
}



export function incrementPost (pid) {
  return {type: INCREMENT_POST, pid}
}

export function decrementPost (pid) {
  return {type: DECREMENT_POST, pid}
}

export function editPost (pid, title, body) {
  return {type: EDIT_POST, pid, title, body}
}

export function deletePost (pid) {
  return {type: DELETE_POST, pid}
}

export function addPost (id, timestamp, title, body, author, category) {
  return {type: ADD_POST, id, timestamp, title, body, author, category}
}




export function incrementComment (cid) {
  return {type: INCREMENT_COMMENT, cid}
}

export function decrementComment (cid) {
  return {type: DECREMENT_COMMENT, cid}
}

export function editComment (cid, timestamp, body) {
  return {type: EDIT_COMMENT, cid, timestamp, body}
}

export function deleteComment (cid) {
  return {type: DELETE_COMMENT, cid}
}

export function addComment (id, timestamp, body, author, parentId) {
  return {type: ADD_COMMENT, id, timestamp, body, author, parentId}
}

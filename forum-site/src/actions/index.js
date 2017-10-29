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




export function incrementComment (cid) {
  return {type: INCREMENT_COMMENT, cid}
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

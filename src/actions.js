import { apiCall } from './api/api'

import { 
	REQUEST_POSTS_PENDING, REQUEST_POSTS_SUCCESS, REQUEST_POSTS_FAILED, 
	REQUEST_USERS_PENDING, REQUEST_USERS_SUCCESS, REQUEST_USERS_FAILED} from './constants'


export const requestPosts = (id) => (dispatch) => { 
  if (id !== 0) {
  	dispatch({ type: REQUEST_POSTS_PENDING })
  	apiCall('https://jsonplaceholder.typicode.com/posts?userId=' + id)
    .then(data => dispatch({ type: REQUEST_POSTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_POSTS_FAILED, payload: error }))
  } else {
  	dispatch({ type: REQUEST_POSTS_PENDING })
  	apiCall('https://jsonplaceholder.typicode.com/posts')
    .then(data => dispatch({ type: REQUEST_POSTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_POSTS_FAILED, payload: error }))
  } 
  
}

export const requestUsers = () => (dispatch) => {
  dispatch({ type: REQUEST_USERS_PENDING })
  apiCall('https://jsonplaceholder.typicode.com/users')
    .then(data => dispatch({ type: REQUEST_USERS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_USERS_FAILED, payload: error }))
}
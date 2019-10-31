import { 
  REQUEST_POSTS_PENDING, REQUEST_POSTS_SUCCESS, REQUEST_POSTS_FAILED, 
  REQUEST_USERS_PENDING, REQUEST_USERS_SUCCESS, REQUEST_USERS_FAILED} from './constants'

const initialState = {
  posts: [],
  isPending: true,
  error: ""
}

export const requestPosts = (state=initialState, action={}) => {
  switch (action.type) {
    case REQUEST_POSTS_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_POSTS_SUCCESS:
      return Object.assign({}, state, {posts: action.payload, isPending: false})
    case REQUEST_POSTS_FAILED:
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}

const initialStateUsers = {
  users: [],
  isPending: true,
  error: ""
}

export const requestUsers = (state=initialStateUsers, action={}) => {
  switch (action.type) {
    case REQUEST_USERS_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_USERS_SUCCESS:
      return Object.assign({}, state, {users: action.payload, isPending: false})
    case REQUEST_USERS_FAILED:
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}



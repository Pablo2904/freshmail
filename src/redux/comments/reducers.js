import types from './types'

const initialState = {
  comments: []
}

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_COMMENTS:
      return {
        comments: action.item
      }
    case types.ADD_COMMENT:
      return {
        comments: [...state.comments, action.item]
      }
    default:
      return state
  }
}

export default commentsReducer

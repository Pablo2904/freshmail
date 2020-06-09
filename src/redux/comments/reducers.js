import types from './types'

const initialState = {
  comments: []
}

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_COMMENTS:
      return {
        ...state, comments: action.item
      }
    default:
      return state
  }
}

export default commentsReducer

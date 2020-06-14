import types from './types'

const addComments = item => ({
  type: types.ADD_COMMENTS, item
})

const addComment = item => ({
  type: types.ADD_COMMENT, item
})

export default {
  addComments,
  addComment
}
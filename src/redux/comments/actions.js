import types from './types'

const addComments = item => ({
  type: types.ADD_COMMENTS, item
})

export default {
  addComments,
}
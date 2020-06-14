import { getAllCommentsService } from '../../services/commentsService'
import actions from './actions'

const fetchComments = async () => {
  const response = await getAllCommentsService()

  return response.data
}

export const getAllComments = () =>
  async (dispatch) => {
    dispatch(actions.addComments(await fetchComments()))
  }

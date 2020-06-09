import { commentsService } from '../../services/commentsService'
import actions from './actions'

const fetchComments = async () => {
  const response = await commentsService()

  return response.data
}

export const getAllComments = () =>
  async (dispatch) => {
    dispatch(actions.addComments(await fetchComments()))
  }

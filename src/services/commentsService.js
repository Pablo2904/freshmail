import axios from 'axios'

export const getAllCommentsService = () => {
  const url = 'https://jsonplaceholder.typicode.com/comments?_limit=20'

  return axios.get(url)
}

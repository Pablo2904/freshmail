import axios from 'axios'

export const commentsService = () => {
  const url = 'https://jsonplaceholder.typicode.com/comments?_limit=20'

  return axios.get(url)
}

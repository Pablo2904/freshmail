export const commentHandler = (comment, comments, selected, dispatchFn) => {
  const newComment = { 
    ...comment,
    selected
  }

  const newComments = [
    ...comments
  ]

  newComments[newComments.findIndex(currentComment => currentComment.id === newComment.id)] = newComment
  dispatchFn(newComments)
}

import React from 'react'

import CommentsList from '../../components/CommentsList'
import Header from '../../components/Header'

const CommentsSelected = () => {
  return (
    <>
      <Header>
        Lista wybranych komentarzy
      </Header>
      <CommentsList buttonContent='Usuń z ulubionych' noDataContent='Brak wybranych komentarzy' selected={false} />
    </>
  )
}

export default CommentsSelected

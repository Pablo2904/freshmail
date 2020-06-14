import React from 'react'

import CommentsList from '../../components/CommentsList'
import Header from '../../components/Header'

const Comments = () => {
  return (
    <>
      <Header>Lista komentarzy</Header>
      <CommentsList buttonContent='Dodaj do wybranych' noDataContent='Ładowanie...' selected  selectHandler/>
    </>
  )
}

export default Comments

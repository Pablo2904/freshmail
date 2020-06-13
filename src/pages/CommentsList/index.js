import React from 'react'
import { connect } from 'react-redux'

import { CommentItem } from '../../components/CommentItem'

const CommentsList = ({ comments }) => {
  return (
    <>
      { 
        comments.length
          ? comments.map(comment => {
            return <CommentItem key={comment.id} comment={comment} />
          })
          : 'Loading...'
      }
    </>
  )
}

const mapStateToProps = state => ({
  comments: state.comments
})

export default connect(mapStateToProps, {})(CommentsList)

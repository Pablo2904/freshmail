import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import commentsActions from '../../redux/comments/actions'
import { commentHandler } from '../../utils/commentHandler'
import CommentItem from '../CommentItem'

const LoadingContainer = styled.div`
  ${({ theme }) => theme.flexCenter };
  margin: 100px 0;
  font-size: 2rem;
`

const CommentsList = ({ comments, handleSelected, buttonContent, regularList, noDataContent }) => {
  let commentsList = [...comments]

  if (!regularList) {
    commentsList = comments.filter(comment => comment.selected)
  }

  return (
    <>
      { 
        commentsList.length
          ? commentsList.map(comment => {
            return (
              <CommentItem
                key={comment.id}
                comment={comment}
                buttonContent={buttonContent}
                onClickHandler={() => commentHandler(comment, comments, regularList, handleSelected)}
                selectHandler={regularList}
              />
            )
          })
          : (<LoadingContainer>{noDataContent}</LoadingContainer>)
      }
    </>
  )
}

const mapStateToProps = state => ({
  comments: state.comments
})

const mapDispatchToProps = dispatch => ({
  handleSelected: comments => dispatch(commentsActions.addComments(comments))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList)

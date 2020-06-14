import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { Button } from '../Button'
import commentsActions from '../../redux/comments/actions'

const Container = styled.div`
  padding: 10px;
  margin: 0 0 25px;
  color: ${({ theme }) => theme.colors.black };
  background: ${({ theme }) => theme.colors.yiellow };
`

const Header = styled.h2`
  margin-bottom: 20px;
  ${({ theme }) => theme.flexColumn };
  font-size: 1.05rem;
`

const Body = styled.div`
  ${({ theme }) => theme.flexStart };
`
const StyledP = styled.p`
  margin-right: 20px;
`

const CommentItem = ({ comment, buttonContent, onClickHandler, selectHandler }) => {
  const handleBody = () => {
    return comment.body && comment.body.length > 20 ? `${comment.body.substring(0,20)}...` : comment.body 
  }

  return (
    <section>
      <Container>
        <Header>
          <span>Name: {comment.name}</span>
          <span>E-mail: {comment.email}</span>
        </Header>
        <Body>
          <StyledP>
            {handleBody()}
          </StyledP>
          <Button onClickHandler={() => onClickHandler()} disabled={selectHandler && comment.selected}>
            {selectHandler &&  comment.selected ? 'Dodano' : buttonContent}
          </Button>
        </Body>
      </Container>
    </section>
  )
}

const mapDispatchToProps = dispatch => ({
  addToSelected: comments => dispatch(commentsActions.addComments(comments))
})

const mapStateToProps = state => ({
  comments: state.comments
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem)

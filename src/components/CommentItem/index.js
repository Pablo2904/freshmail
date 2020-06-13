import React from 'react'
import styled from 'styled-components'

import { Button } from '../Button'

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

export const CommentItem = ({ comment }) => {
  const handleBody = () => {
    return comment.body.length > 20 ? `${comment.body.substring(0,20)}...` : comment.body 
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
          <Button onClickHandler={() => console.log(comment.id)} disabled>
            Dodaj do wybranych
          </Button>
        </Body>
      </Container>
    </section>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { Button } from '../../components/Button'
import Header from '../../components/Header'

const Container = styled.div`
  ${({ theme }) => theme.flexColumn };
  ${({ theme }) => theme.flexCenter };
`

const Text = styled.span`
  color: ${({ theme }) => theme.colors.black };
`

export const Error = () => {
  return (
    <Container>
      <Header>
        Strona o podanym adresie nie istnieje :(
      </Header>
      <Button>
        <NavLink to={''}>
          <Text>
            Wróć na stronę główną
          </Text>
        </NavLink>
      </Button>
    </Container>
  )
}

import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h2`
  margin-bottom: 30px;
`

const Header = ({ children }) => {
  return (
    <StyledHeader>
      {children}
    </StyledHeader>
  )
}

export default Header

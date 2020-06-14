import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.orange };
  border: none;
  outline: none;

  :hover {
    background: ${({ theme }) => theme.colors.orangeDark };
    cursor: pointer;
  }

  ${props => props.disabled && css`
    background: ${({ theme }) => theme.colors.grey };
    color: ${({ theme }) => theme.colors.black };
    pointer-events: none;

    &:hover {
      background: ${({ theme }) => theme.colors.grey };
    }
  `};
`

const Body = styled.div`
  font-weight: bold;
`

export const Button = ({ onClickHandler, children, type, disabled }) => {
  return (
    <StyledButton onClick={onClickHandler} disabled={disabled} type={type}>
      <Body>
        {children}
      </Body>
    </StyledButton>
  )
}

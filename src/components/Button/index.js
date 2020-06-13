import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.orange };
  border: none;
  outline: none;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.colors.orangeDark };
    cursor: default;
  }

  ${props => props.disabled && css`
    background: ${({ theme }) => theme.colors.grey };
    color: ${({ theme }) => theme.colors.black };
    cursor: not-allowed;
    pointer-events: none;
  `};
`

const Body = styled.div`
  font-weight: bold;
`

export const Button = ({ onClickHandler, children, disabled }) => {
  return (
    <StyledButton onClick={onClickHandler} disabled={disabled}>
      <Body>
        {children}
      </Body>
    </StyledButton>
  )
}

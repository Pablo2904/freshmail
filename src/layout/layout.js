import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from './theme'

const GlobalStyle = createGlobalStyle`
  body, h3, h2, ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;

    :visited {
      color: ${({ theme }) => theme.colors.creamy };
    }
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`
const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.colors.purple };
  color: ${({ theme }) => theme.colors.creamy };
  height: ${({ theme }) => theme.screenHeight.full };
  ${({theme}) => theme.flex};
`

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <StyledWrapper>
          {children}
        </StyledWrapper>
      </>
    </ThemeProvider>
  )
}

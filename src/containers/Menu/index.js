import React from 'react'
import styled from 'styled-components'

import { menuConfiguration } from '../../configuration/Menu'
import { MenuItem } from '../../components/MenuItem'

const StyledMenu= styled.div`
  background: ${({ theme }) => theme.colors.black };
  font-weight: bold;
  padding-left: 5%;
`

const StyledUl = styled.ul`
  ${({theme}) => theme.flexStart};
`

export const Menu = () => {
  return (
    <header>
      <nav>
        <StyledMenu>
          <StyledUl>
            { 
              menuConfiguration.map(item => (
                <MenuItem key={item.title} item={item} />
              ))
            }
          </StyledUl>
        </StyledMenu>
      </nav>
    </header>
  )
}

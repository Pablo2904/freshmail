import React, { useState, useEffect, useMemo } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled, { css } from 'styled-components'

const StyledLi = styled.li`
  cursor: pointer;

  :hover {
    ${props => !props.active && css`
      background: ${({ theme }) => theme.colors.purpleDark };
  `};
  }

  ${props => props.active && css`
    background: ${({ theme }) => theme.colors.purple };
    cursor: default;
  `};
`

const StyledNavLink = styled(NavLink)`
  padding: 20px;
  display: block;
  cursor: inherit;
`

export const MenuItem = ({ item }) => {
  const location = useLocation()
  const [isActiveLink, setIsActiveLink] = useState(false)

  useEffect(() => {
    if (location.pathname === item.href) {
      setIsActiveLink(true)
    }
    return () => setIsActiveLink(false)
  }, [location, item.href])

  const isActive = useMemo(() => (isActiveLink ? true : false), [isActiveLink])

  return (
    <StyledLi active={isActive}>
      <StyledNavLink to={item.href || ''}>
        {item.title}
      </StyledNavLink>
    </StyledLi>
  )
}

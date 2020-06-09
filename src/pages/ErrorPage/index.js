import React from 'react'

import { NavLink, useLocation } from 'react-router-dom'

export const Error = () => {
  const location = useLocation()
  return (
    <div>
      <h2>
        No match for <code>{location.pathname}</code>
      </h2>
      <div>
        <NavLink to={''}>
          Back to Comments
        </NavLink>
      </div>
    </div>
  )
}

import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Comments from '../pages/Comments'
import CommentsNew from '../pages/CommentsNew'
import CommentsSelected from '../pages/CommentsSelected'

export const CommentsRouter = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.path}/selected`} component={CommentsSelected}/>
      <Route exact path={`${match.path}/new`} component={CommentsNew}/>
      <Route exact path={''} component={Comments}/>
    </Switch>
  )
}

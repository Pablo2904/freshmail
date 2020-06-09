import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'

import { CommentsRouter } from './routes/CommentsRouter'
import { Error } from './pages/ErrorPage'

import { Menu } from './containers/Menu'
import Main from './containers/Main'

export const App = () => (
  <Router>
    <Menu />
    <Main>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/comments' />
        </Route>
        <Route path='/comments' component={CommentsRouter} />
        <Route path='*' component={Error} />
      </Switch>
    </Main>
  </Router>
)

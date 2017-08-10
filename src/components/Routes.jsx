import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AccountPage from './Account/containers/AccountPage'
import LoginPage from './Account/containers/LoginPage'
import AuthorDetailPage from './Authors/containers/AuthorDetailPage'
import AuthorsListPage from './Authors/containers/AuthorsListPage'
import BooksListPage from './Books/containers/BooksListPage'
import NotFound from './Common/NotFound'
import Home from './Common/Home'

import { localUrls } from '../constants/urls'

const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path={localUrls.account} component={AccountPage} />
      <Route exact path={localUrls.login} component={LoginPage} />
      <Route exact path={localUrls.authorsList} component={AuthorsListPage} />
      <Route exact path={`${localUrls.authorsList}/:id`} component={AuthorDetailPage} />
      <Route exact path={localUrls.booksList} component={BooksListPage} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default routes

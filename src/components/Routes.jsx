import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AccountDetailPage from './Account/AccountDetailPage'
import AuthorsListPage from './Authors/AuthorsListPage'
import BooksListPage from './Books/BooksListPage'
import NotFound from './Common/NotFound'
import Home from './Common/Home'

import { localUrls } from '../constants/urls'

const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path={localUrls.account} component={AccountDetailPage} />
      <Route exact path={localUrls.authorsList} component={AuthorsListPage} />
      <Route exact path={localUrls.booksList} component={BooksListPage} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default routes

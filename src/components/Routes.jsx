import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AccountDetailPage from '@/containers/Account/Detail'
import LoginPage from '@/containers/Account/Login'

import AuthorCreatePage from '@/containers/Authors/Create'
import AuthorDetailPage from '@/containers/Authors/Detail'
import AuthorsListPage from '@/containers/Authors/List'

import BookCreatePage from './Books/containers/BookCreatePage'
import BookDetailPage from './Books/containers/BookDetailPage'
import BooksListPage from './Books/containers/BooksListPage'
import NotFound from './common/NotFound'
import Home from './common/Home'

import { localUrls } from '../constants/urls'

const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path={localUrls.account} component={AccountDetailPage} />
      <Route exact path={localUrls.login} component={LoginPage} />
      <Route exact path={localUrls.authorsList} component={AuthorsListPage} />
      <Route exact path={`${localUrls.authorsList}/new`} component={AuthorCreatePage} />
      <Route exact path={`${localUrls.authorsList}/:id`} component={AuthorDetailPage} />
      <Route exact path={`${localUrls.booksList}/new`} component={BookCreatePage} />
      <Route exact path={`${localUrls.booksList}/:id`} component={BookDetailPage} />
      <Route exact path={localUrls.booksList} component={BooksListPage} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default routes

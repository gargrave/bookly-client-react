import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import SimpleHeader from './Header/SimpleHeader'

import AccountDetailPage from './Account/AccountDetailPage'
import AuthorsListPage from './Authors/AuthorsListPage'
import BooksListPage from './Books/BooksListPage'
import HomeRoute from './Home'

import './App.css'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Bookly</h1>

          <SimpleHeader />

          <Switch>
            <Route exact path="/" component={HomeRoute} />
            <Route exact path="/account" component={AccountDetailPage} />
            <Route exact path="/authors" component={AuthorsListPage} />
            <Route exact path="/books" component={BooksListPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

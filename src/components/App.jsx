import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import SimpleHeader from './Header/SimpleHeader'
import Routes from './Routes'

import './App.css'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Bookly</h1>
          <SimpleHeader />
          <Routes />
        </div>
      </BrowserRouter>
    )
  }
}

export default App

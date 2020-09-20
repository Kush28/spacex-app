import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import initStore from './redux'
import Home from './pages'

const state = window.__STATE__
delete window.__STATE__

const store = initStore(state)

hydrate(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.querySelector('#app'),
)

import React from 'react'

import { Provider } from 'react-redux'
import initStore from './redux'
import Home from './pages'

const initialState = {
  isFetching: false,
  launches: null,
}

module.exports = async function render() {
  const { data } = await Home.getProps()
  const store = initStore({ ...initialState, launches: data })

  const main = (
    <Provider store={store}>
      <Home />
    </Provider>
  )

  const serverSideState = store.getState()

  return { main, serverSideState }
}

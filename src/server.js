import React from 'react'

import { Provider } from 'react-redux'
import initStore from './redux'
import Home from './pages'
import sanatizeFilterObject from './helpers/filters.helper'

const initialState = {
  isFetching: false,
  launches: null,
  filters: {
    year: null,
    launch: null,
    landing: null,
  },
}

export default async function render({ query = {} }) {
  const { data } = await Home.getProps({ query })
  const store = initStore({
    ...initialState,
    launches: data,
    filters: sanatizeFilterObject(query),
  })

  const main = (
    <Provider store={store}>
      <Home />
    </Provider>
  )

  const serverSideState = store.getState()

  return { main, serverSideState }
}

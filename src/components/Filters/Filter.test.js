import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Filters from './Filters'

const initialState = {
  isFetching: false,
  launches: null,
  filters: {
    year: null,
    launch: null,
    landing: null,
  },
}

describe('Filters Component', () => {
  let wrapper
  beforeEach(() => {
    const mockStore = configureStore()
    wrapper = shallow(
      <Provider store={mockStore(initialState)}>
        <Filters />
      </Provider>,
    )
  })

  test('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})

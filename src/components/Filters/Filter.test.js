import React from 'react'
import { mount } from 'enzyme'
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
  const mockStore = configureStore({
    isFetching: false,
    launches: [],
    filters: {
      year: null,
      launch: null,
      landing: null,
    },
  })
  const mockRefreshLaunchData = jest.fn()
  beforeEach(() => {
    wrapper = mount(
      <Provider store={mockStore(initialState)}>
        <Filters
          filters={{ year: null, launch: null, landing: null }}
          refreshLaunchData={mockRefreshLaunchData}
        />
      </Provider>,
    )
  })

  test('should render', () => {
    expect(wrapper).toBeTruthy()
  })

  test('should render FilterButton', () => {
    expect(wrapper.find('FilterButton')).toBeTruthy()
  })
})

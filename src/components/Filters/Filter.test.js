import React from 'react'
import { shallow } from 'enzyme'

import Filters from './Filters'

describe('Filters Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Filters />)
  })

  test('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})

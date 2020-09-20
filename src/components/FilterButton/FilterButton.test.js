import React from 'react'
import { shallow } from 'enzyme'
import FilterButton from './FilterButton'

describe('FilterButton Component', () => {
  let wrapper
  const mockCallBack = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<FilterButton onClick={mockCallBack}>Button</FilterButton>)
  })

  test('should render', () => {
    expect(wrapper).toBeTruthy()
  })

  test('should be clickable', () => {
    wrapper.find('button').simulate('click')
    expect(mockCallBack).toHaveBeenCalledTimes(1)
  })

  test('should be active if isActive=true', () => {
    wrapper.setProps({
      isActive: true,
    })
    expect(wrapper.find('button').props().className).toEqual('filter-button-active')
  })

  test('should not be active if isActive=false', () => {
    wrapper.setProps({
      isActive: false,
    })
    expect(wrapper.find('button').props().className).toEqual('filter-button')
  })
})

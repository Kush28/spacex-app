import React from 'react'
import { shallow } from 'enzyme'
import Layout from './Layout'

describe('Layout Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Layout>Body</Layout>)
  })

  test('should render', () => {
    expect(wrapper).toBeTruthy()
  })

  test('should render children', () => {
    expect(wrapper.find('main').props().children).toBeTruthy()
  })

  test('should render header', () => {
    expect(wrapper.find('header').props().children).toBeTruthy()
  })

  test('should render footer', () => {
    expect(wrapper.find('footer').props().children).toBeTruthy()
  })
})

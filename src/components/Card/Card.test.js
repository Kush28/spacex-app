import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'
import { CLOUDINARY_URI, DUMMY_IMG, SPACEX_IMG_URI } from '../../constants'

describe('Card Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <Card
        missionName="name"
        missionImage="/test"
        missionIds={[1, 2, 3]}
        launchYear="2002"
        launchSuccess="true"
        landSuccess="false"
      />,
    )
  })

  test('should render', () => {
    expect(wrapper).toBeTruthy()
  })

  test('should lazyload image', () => {
    expect(wrapper.find('img').props().loading).toEqual('lazy')
  })

  test('should load cloudinary image if correct image is sent', () => {
    wrapper.setProps({
      missionImage: `${SPACEX_IMG_URI}test.png`,
    })
    expect(wrapper.find('img').props().src.startsWith(CLOUDINARY_URI)).toBeTruthy()
  })

  test('should not load cloudinary image if wrong image is sent', () => {
    wrapper.setProps({
      missionImage: 'https://www.image.com/test.png',
    })
    expect(wrapper.find('img').props().src.startsWith(CLOUDINARY_URI)).toBeFalsy()
  })

  test('should load dummy image if not image is passed', () => {
    wrapper.setProps({
      missionImage: null,
    })
    expect(wrapper.find('img').props().src).toEqual(DUMMY_IMG)
  })
})

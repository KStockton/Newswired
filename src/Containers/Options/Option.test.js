import React from 'react'
import {Option} from './Options'
import { shallow } from 'enzyme'


describe('Option', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Option />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
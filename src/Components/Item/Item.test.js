import React from 'react';
import Item from './Item';
import { shallow } from 'enzyme';

describe('Item', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Item/>) 
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
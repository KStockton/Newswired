import React from 'react';
import Begin from './Begin';
import { shallow } from 'enzyme';

describe('Begin', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Begin />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
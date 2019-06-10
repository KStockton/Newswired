import React from 'react';
import Footer from './Begin';
import { shallow } from 'enzyme';

describe('Footer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
});
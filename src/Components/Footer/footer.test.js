import React from 'react';
import Footer from './Footer';
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
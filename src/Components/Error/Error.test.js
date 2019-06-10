import React from 'react';
import Error from './Error';
import { NavLink } from 'react-router-dom';
import { shallow } from 'enzyme';

describe('Error', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Error/>) 
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('Navlink should have a prop of /Options with a link if something goes wrong', () => {
     expect(wrapper.find(NavLink).props().to).toBe('/Options');
   });
});
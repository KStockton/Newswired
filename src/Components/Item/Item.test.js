import React from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';

describe('Item', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Item/>) 
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('Link should have a prop of /Options with a link if something goes wrong', () => {
     expect(wrapper.find(Link).props().to).toBe('/main');
   });
})
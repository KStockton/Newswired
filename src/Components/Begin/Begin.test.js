import React from 'react';
import Begin from './Begin';
import {Link} from 'react-router-dom';
import { shallow } from 'enzyme';

describe('Begin', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Begin />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Link should have a prop of /card/3 when a user clicks the link', () => {
    let mockId = 3;
    const wrapper = shallow(<Begin id={mockId}/>);
    expect(wrapper.find(Link).props().to).toBe('/Options');
  });
});
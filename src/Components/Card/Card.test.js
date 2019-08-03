import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import { Link } from 'react-router-dom';

describe('Card', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Card/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when props are passed', () => {
    let mockCardImage = "http://cool.com";
    let mockrank = 3;
    let mockauthor = "Michele Obama";
    let mockdescription = 'effor';
    let mocktitle = 'Overcome';
    let mockweeksOnList = 4;


    const wrapper = shallow(<Card
      id={mockrank}
      CardImage={mockCardImage}
      rank={mockrank}
      description={mockdescription}
      author={mockauthor}
      title={mocktitle}
      weeksOnList={mockweeksOnList}
    />);
    
    expect(wrapper).toMatchSnapshot();
  });

  it('Link should have a prop of /card/3 when a user clicks the link', () => {

    let mockId = 3;
    const wrapper = shallow(<Card id={mockId}/>);
    expect(wrapper.find(Link).props().to).toBe('/card/3');
  });
});
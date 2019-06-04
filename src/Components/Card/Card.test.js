import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Card/>)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
  it('should match the snapshot when props are passed', () => {
    let mockCardImage = "http://cool.com"
    let mockrank = 3
    let mockauthor = "Michele Obama"
    let mockdescription = 'effor'
    let mocktitle = 'Overcome'
    let mockweeksOnList = 4

    const wrapper = shallow(<Card
      CardImage={mockCardImage}
      rank={mockrank}
      description={mockdescription}
      author={mockauthor}
      title={mocktitle}
      weeksOnList={mockweeksOnList}
    />)
    
    expect(wrapper).toMatchSnapshot()
  });
})
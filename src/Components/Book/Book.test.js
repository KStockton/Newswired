import React from 'react';
import { shallow } from 'enzyme';
import Book from './Book';

describe('Book', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Book/>)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
  it('should match the snapshot when props are passed', () => {
    let mockbookImage = "http://cool.com"
    let mockrank = 3
    let mockauthor = "Michele Obama"
    let mockdescription = 'effor'
    let mocktitle = 'Overcome'
    let mockweeksOnList = 4

    const wrapper = shallow(<Book
      bookImage={mockbookImage}
      rank={mockrank}
      description={mockdescription}
      author={mockauthor}
      title={mocktitle}
      weeksOnList={mockweeksOnList}
    />)
    
    expect(wrapper).toMatchSnapshot()
  });
})
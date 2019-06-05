import React from 'react';
import { shallow } from 'enzyme';
import {Book} from './Book';

describe('Book', () => {
  let wrapper;
  let mockProp = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<Book/>)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
  it('should match the snapshot when props are passed', () => {
    let mockbookImage = "http://win.com"
    let mockrank = 1
    let mockauthor = "Michele Obama"
    let mockdescription = 'effort'
    let mocktitle = 'Overcome'
    let mockweeksOnList = 2

    const wrapper = shallow(<Book
      bookImage={mockbookImage}
      rank={mockrank}
      description={mockdescription}
      author={mockauthor}
      title={mocktitle}
      weeksOnList={mockweeksOnList}
      toggleFavorite={mockProp}
    />)
    
    expect(wrapper).toMatchSnapshot()
  });
  xit('should call togglefavorite when img is clicked', () => {
    wrapper.find('#img-test').simulate('click')
    expect(mockProp).toHaveBeenCalled()
  })
})
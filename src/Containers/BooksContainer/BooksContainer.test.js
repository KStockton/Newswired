import React from 'react';
import BookContainer from './BooksContainer';
import { shallow } from 'enzyme';

describe('BookContainer', () => {
  let wrapper;
  let mockBooks =[{title:'Golden'},{title:'Xavier'}]
  beforeEach(() => {
    wrapper = shallow(<BookContainer books={mockBooks}/>)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
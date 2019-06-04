import React from 'react';
import BookContainer from './BooksContainer';
import { shallow, mount } from 'enzyme';
//import mockstore to provide context

describe('BookContainer', () => {
  let wrapper;
  let mockBooks =[{title:'Golden'},{title:'Xavier'}]
  beforeEach(() => {
    const context = [{ name: 'foo' }, {title: 'effort'}];
    wrapper = mount(<BookContainer books={mockBooks}/>, {context})
  })
  xit('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
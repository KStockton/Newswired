import React from 'react';
import {BookContainer} from './BooksContainer';
import { shallow  } from 'enzyme';
import {mapStateToProps, mapDispatchToProps } from './BooksContainer';
import { fetchAllBooks} from './../../Thunks/fetchAllBooks'
jest.mock('../../Thunks/fetchAllBooks')
//import mockstore to provide context

describe.only('BookContainer', () => {
  let wrapper;
  let mockProps = {
    allBooks: [{title:'Golden'},{title:'Xavier'}],
    error: 'something went wrong'
  }
  beforeEach(() => {
    wrapper = shallow(<BookContainer 
      allBooks={mockProps.allBooks}
      error={mockProps.error}
      />)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
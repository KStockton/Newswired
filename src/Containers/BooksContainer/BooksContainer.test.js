import React from 'react';
import {BookContainer, mapStateToProps, mapDispatchToProps} from './BooksContainer';
import { shallow  } from 'enzyme';
import { fetchAllBooks} from './../../Thunks/fetchAllBooks'
jest.mock('../../Thunks/fetchAllBooks')



describe('BookContainer', () => {
  let wrapper;
  let mockFetchFunction = jest.fn()
  let mockBooks = { allBooks :[{title:'Golden'},{title:'Xavier'}]}
  let mockError = 'something went wrong'

  beforeEach(() => {
    
    wrapper = shallow(<BookContainer 
      allBooks={mockBooks}
      error={mockError}
      fetchAllBooks={mockFetchFunction}

      />)
  })
  xit('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
});
  describe('MSTP',() =>{
    it('should map state from mockstate', () => {
      const mockState ={ allBooks :[{title:'Golden'},{title:'Xavier'}], error: ''}
      const result = mapStateToProps(mockState)
      expect(result).toEqual(mockState)
    }) 
})

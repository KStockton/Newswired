import React from 'react';
import {BooksContainer, mapStateToProps} from './BooksContainer';
import { shallow  } from 'enzyme';
// import { fetchAllBooks} from './../../Thunks/fetchAllBooks'
jest.mock('../../Thunks/fetchAllBooks')



describe('BookContainer', () => {
  let wrapper;
  let mockFetchFunction = jest.fn()
  let mockBooks = [{title:'Golden'},{title:'Xavier'}]
  let mockError = 'something went wrong'

  beforeEach(() => {
    
    wrapper = shallow(<BooksContainer 
      allBooks={mockBooks}
      error={mockError}
      fetchAllBooks={mockFetchFunction}

      />)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should match the snapshot the books are passed as props', () => {
    wrapper.setProps({allBooks:  [{title: 'Press, Press, Press, Press, Press'}]})
    expect(wrapper).toMatchSnapshot()
  });
  it('should match the snapshot when there is an error message',() => {
    wrapper.setProps({ allBooks: []}) 
    wrapper.setProps({ error: ''})
    expect(wrapper).toMatchSnapshot()
  });
  it('should call display books when rendered', () => {
    wrapper.instance().displayBooks = jest.fn()
    wrapper.update()
    wrapper.instance().render()
    expect(wrapper.instance().displayBooks).toHaveBeenCalled()
  })

});
  describe('MSTP',() =>{
    it('should map state from mockstate', () => {
      const mockState ={ allBooks :[{title:'Golden'},{title:'Xavier'}], error: ''}
      const result = mapStateToProps(mockState)
      expect(result).toEqual(mockState)
    }) 
})

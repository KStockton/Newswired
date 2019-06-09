import React from 'react';
import {BooksContainer, mapStateToProps, mapDispatchToProps} from './BooksContainer';
import { shallow  } from 'enzyme';
import { fetchAllBooks } from './../../Thunks/fetchAllBooks'
jest.mock('../../Thunks/fetchAllBooks')



describe('BookContainer', () => {
  let wrapper;
  let mockfetchAllBooks = jest.fn()
  let mockBooks = [{title:'Golden'},{title:'Xavier'}]
  let mockError = 'something went wrong'

  beforeEach(() => {
    
    wrapper = shallow(<BooksContainer 
      allBooks={mockBooks}
      error={mockError}
      fetchAllBooks={mockfetchAllBooks}

      />)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should match the snapshot when there is an error message',() => {
    const allBooks = []
    wrapper.setProps({allBooks}) 
    wrapper.setProps({ error: 'something went wrong'})
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  });

  it('should call display books when rendered', () => {
    wrapper.instance().displayBooks = jest.fn()
    wrapper.update()
    wrapper.instance().render()
    expect(wrapper.instance().displayBooks).toHaveBeenCalled()
  });

  it('should render loading when allsports.length === 0, error message != empty string ', () => {
    const allBooks = []
    const error = ''
    wrapper.setProps({allBooks})
    wrapper.setProps({error})
    expect(wrapper).toMatchSnapshot()
  });

  it('should render books when all books props are passed',() => {
   let books = wrapper.instance().displayBooks().length 
    expect(books).toBe(2)
  });
  
describe('ComponentDidMount', () => {

  it('should not call fetchAllBooks when the allBooks length is greater than 0', () => {  
    wrapper.instance().componentDidMount()
    expect(fetchAllBooks).not.toHaveBeenCalled()
  });
  
  it('should call fetchAllBooks when the allBooks length is 0', () => {  
    const mockBooks = []
    const mockError = ''
    wrapper = shallow(<BooksContainer
      allBooks={mockBooks}
      error={mockError}
      fetchAllBooks={mockfetchAllBooks}
      />)
      wrapper.instance().componentDidMount()
      expect(mockfetchAllBooks).toHaveBeenCalled()
    });
    
  });
})
  describe('MSTP',() =>{
    it('should map state from mockstate', () => {
      const mockState ={ allBooks :[{title:'Golden'},{title:'Xavier'}], error: ''}
      const result = mapStateToProps(mockState)
      expect(result).toEqual(mockState)
    });
  });

  describe('MDTP', () => {
    let mockDispatch
    let mappedProps
    
    beforeEach(() => {
        mockDispatch = jest.fn()
        mappedProps = mapDispatchToProps(mockDispatch)
    });

    it('should call fetchAllBooks with the correct params',() => {
      const mockbookUrl = 'www.cheers.com'
      const actionToDispatch = fetchAllBooks(mockbookUrl)
      mappedProps.fetchAllBooks(mockbookUrl)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });
  });


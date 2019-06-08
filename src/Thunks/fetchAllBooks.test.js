import { fetchAllBooks } from './fetchAllBooks';
import * as action from '../actions'

describe('fetchAllBooks', () => {
  let mockUrl
  let mockDispatch
  let mockBook
  let mockcleanBooks
  beforeEach(() => {
    mockUrl = "http://www.workhard.com"
    mockDispatch = jest.fn()
    mockcleanBooks = jest.fn()
    mockBook = [{title: 'Fire and Ice'}, {title: 'Shadow Avengeners'}]
  })
  xit('should dispatch isLoading(true)', async() => {
    const thunk = fetchAllBooks(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(action.isLoading(true))
  });

  xit('should dispatch hasError with a message if the response is not 200', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
      }))
    const thunk = fetchAllBooks(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(action.hasErrored('Something went wrong'))
  });
  xit('should dispatch isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        books: mockBook
      })
    }))
    
    const thunk = fetchAllBooks(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(action.isLoading(false))
  })
  xit('should dispatch getAllBooks with and array of books', async () => {
    const books = [{id: 3, title: 'Hard work pays off', author: 'Michael KS'}, {id: 1, title: 'Never Give Up', author: 'Michael KS'}]
    
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        books
      })
    }))
    const thunk = fetchAllBooks(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(action.getAllBooks(books))
  });
});
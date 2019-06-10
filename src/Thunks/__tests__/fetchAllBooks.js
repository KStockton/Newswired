import { fetchAllBooks } from '../fetchAllBooks';
import { isLoading, getAllBooks, hasErrored } from '../../actions';
import { cleanNYTBooks } from '../../Utility/Cleaners/cleanNYTBooks';
jest.mock('../../Utility/Cleaners/cleanNYTBooks')

describe('fetchAllBooks', () => {
  let mockUrl;
  let mockDispatch;
  let mockBooks;
  
  beforeEach(() => {
    mockUrl = "www.cool.com"
    mockDispatch = jest.fn()
    mockBooks = [{title: 'work'}]
  })

  it('should dispatch isLoading(true)', () => {
    const thunk = fetchAllBooks(mockUrl)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  });

  it('should dispatch hasError with a message if the response.statusText is not 200', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText:  'ooops'
  }))

    const thunk = fetchAllBooks(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('ooops'))
  });
  
  it('should cleanNYTBooks to have been called when response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockBooks)
    }))
    const thunk = fetchAllBooks(mockUrl)
    await thunk(mockDispatch) 
    expect(cleanNYTBooks).toHaveBeenCalled()
  });

  it('should cleanNYTBooks to have been called with mockBooks', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockBooks)
    }))

    const thunk = fetchAllBooks(mockUrl)
    await thunk(mockDispatch) 
    expect(cleanNYTBooks).toHaveBeenCalledWith(mockBooks)
  });

  it('should pass the correct params when fetch is called', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockBooks)
    }))
    const thunk = fetchAllBooks(mockUrl)
    await thunk(mockDispatch) 
    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  });

  it('should dispatch isLoading(false) if the response is OK', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
            books: mockBooks
        })
    }))
    const thunk = fetchAllBooks(mockUrl) 
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  });

  it('should dispatch getAllBooks if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockBooks)
    }))
    const thunk = fetchAllBooks(mockUrl) 
    await thunk(mockDispatch)
    const result = cleanNYTBooks(mockBooks)
    expect(mockDispatch).toHaveBeenCalledWith(getAllBooks(result))
  });
});
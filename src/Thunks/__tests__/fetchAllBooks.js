import { fetchAllBooks } from '../fetchAllBooks';
import { isLoading, getAllBooks, hasErrored } from '../../actions';
import { cleanNYTBooks } from '../../Utility/Cleaners/cleanNYTBooks'
jest.mock('../../Utility/Cleaners/cleanNYTBooks')

describe('fetchAllBooks', () => {
  let mockUrl;
  let mockDispatch;
  let mockBooks;
  let mockCleanNYTBooks
  beforeEach(() => {
    mockCleanNYTBooks = [{id: 1234}]
    mockUrl = "www.cool.com"
    mockDispatch = jest.fn()
    mockBooks = [{title: 'work'}]
  })

  it('should dispatch isLoading(true)', () => {
    const thunk = fetchAllBooks(mockUrl)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  });

  it('should dispatch hasError with a message if the response.status is not 200', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText:  'ooops'
  }))

    const thunk = fetchAllBooks(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('ooops'))
  });
  xit('should dispatch isLoading(false) if the response is OK', async () => {
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
  it('should cleanNYTBooks to have been called when response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockBooks)
    }))
    const thunk = fetchAllBooks(mockUrl)
    await thunk(mockDispatch) 
    expect(cleanNYTBooks).toHaveBeenCalled()
  });
})
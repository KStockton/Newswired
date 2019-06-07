import { fetchAllBooks } from '../fetchAllBooks';
import { isLoading, getAllBooks, hasErrored } from '../../actions';

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

  it('should dispatch hasError with a message if the response.status is not 200', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText:  'ooops'
  }))

    const thunk = fetchAllBooks(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('ooops'))
  });
  it('should dispatch isLoading(false) if the response if OK', async () => {
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
  it('should dispatch getAllNotes with an array of notes', async () => {
    const books =  [{title: 'make it happen'}]

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(
            books
        )
    }))
    const thunk = fetchAllBooks(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(getAllBooks(books))
})
})
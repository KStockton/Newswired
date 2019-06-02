import { fetchAllBooks } from './fetchAllBooks';
import * as action from '../actions'

describe('fetchAllBooks', () => {
  let mockUrl
  let mockDispatch
  let mockBook
  beforeEach(() => {
    mockUrl = "http://www.workhard.com"
    mockDispatch = jest.fn()
    mockBook = [{title: 'Fire and Ice'}, {title: 'Shadow Avengenr'}]
  })
  it('should dispatch isLoading(true)', () => {
    const thunk = fetchAllBooks(mockUrl)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(action.isLoading(true))
  });
  it('should dispatch hasError with a message if the response is not 200', async () => {
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
      }))
    const thunk = fetchAllBooks(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(action.hasErrored('Something went wrong'))
  })
})
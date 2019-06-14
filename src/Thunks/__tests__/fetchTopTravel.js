import { fetchTopTravel } from '../fetchTopTravel';
import { isLoading, getTopTravel, hasErrored } from '../../actions/index';
import { cleanResponse } from '../../Utility/Cleaners/cleanResponse';
jest.mock('../../Utility/Cleaners/cleanResponse')

describe('fetchTopTravel', () => {
  let mockUrl;
  let mockDispatch;
  let mockTravel; 
  
  beforeEach(() => {
    mockUrl = 'www.jamaica.com'
    mockDispatch = jest.fn()
    mockTravel = [{title: 'cayman islands'}]
  });

  it('should dispatch isLoading(true)', async () => {
    const thunk = fetchTopTravel(mockUrl)

    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  });

  it('should dispatch hasError with a message if the response.statusText is not 200', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'ooops'
    }))

    const thunk = fetchTopTravel(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('ooops'))
  });

  it('should cleanResponse to have been called when response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockTravel)
    }))

    const thunk = fetchTopTravel(mockUrl)
    await thunk(mockDispatch)
    expect(cleanResponse).toHaveBeenCalled()
  });

  it('cleanResponse to have been called with mockTravel', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockTravel)
    }))

    const thunk = fetchTopTravel(mockUrl)
    await thunk(mockDispatch)
    expect(cleanResponse).toHaveBeenCalledWith(mockTravel)
  });

  it('should pass the correct params when fetch is called', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockTravel)
    }))
    const thunk = fetchTopTravel(mockUrl)
    await thunk(mockDispatch)
    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  });

  it('should dispatch isLoading(false) if the response is OK', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        travel: mockTravel
      })
    }))
    const thunk = fetchTopTravel(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  }); 

  it('should dispatch getAllBooks if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockTravel)
    }))

    const thunk = fetchTopTravel(mockUrl)
    await thunk(mockDispatch)
    const result = cleanResponse(mockTravel)
    expect(mockDispatch).toHaveBeenCalledWith(getTopTravel(result))
  })
})
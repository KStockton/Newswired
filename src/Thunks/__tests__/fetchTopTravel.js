import { fetchTopTravel } from '../fetchTopTravel';
import * as actions from '../../actions';
import { cleanResponse } from '../../Utility/Cleaners/cleanResponse';
jest.mock('../../Utility/Cleaners/cleanResponse')

describe('fetchTopTravel', () => {
  let mockUrl;
  let mockDispatch;
  let mockTravel;
  
  beforeEach(() => {
    mockUrl = 'www.jamaica.com'
    mockDispatch = jest.fn()
    mockTravel = [{location: 'cayman islands'}]
  });

  it('should dispatch isLoading(true)', () => {
    const thunk = fetchTopTravel(mockUrl)
    thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(actions.isLoading(true))
  });

  xit('should dispatch hasError with a message if the response.statusText is not 200', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'no Travel Here'
    }))
    const thunk = fetchTopTravel(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(actions.hasErrored('no Travel Here'))
  })

  it('should cleanResponse to have been called when response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      oke: true,
      json: () => Promise.resolve(mockTravel)
    }))

    const thunk = fetchTopTravel(mockUrl)
    await thunk(mockTravel)
    expect(cleanResponse).toHaveBeenCalled()
  })

  it('cleanResponse to have been called with mockTravel', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve ({
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
      json: () => Promise.resolve({
        travel: mockTravel
      })
    }))
    const thunk = fetchTopTravel(mockUrl)
    await thunk(mockDispatch)
    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })
})
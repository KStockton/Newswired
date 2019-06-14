import { fetchSportsNews } from '../fetchSportsNews';
import { isLoading, getSportsNews, hasErrored } from '../../actions';
import { cleanResponse } from '../../Utility/Cleaners/cleanResponse';
jest.mock('../../Utility/Cleaners/cleanResponse');

describe('fetchSportsNews', () => {
  let mockUrl, mockDispatch, mockSports

  beforeEach (() => {
     mockUrl = 'www.sports.com'
     mockDispatch = jest.fn()
     mockSports = [{title: 'nuggets'}]
  });

  it('should dispatch isLoading(true) ', () => {
    const thunk = fetchSportsNews(mockUrl)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  });

  it('should dispatch hadErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'sorry no sports'
    }))

    const thunk = fetchSportsNews(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('sorry no sports'))
  });

  it('should cleanResponse to have been called with response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockSports)
    }))
    const thunk = fetchSportsNews(mockUrl)
    await thunk(mockDispatch)
    expect(cleanResponse).toHaveBeenCalled()
  });

  it('cleanResponse to have been called with mockSports', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockSports)
    }))

    const thunk = fetchSportsNews(mockUrl)
    await thunk(mockDispatch) 
    expect(cleanResponse).toHaveBeenCalledWith(mockSports)
  });

  
});


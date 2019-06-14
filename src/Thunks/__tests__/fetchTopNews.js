import { fetchTopNews } from '../fetchTopNews';
import { isLoading, getTopNews, hasErrored } from '../../actions/index'
import { cleanResponse } from '../../Utility/Cleaners/cleanResponse';
import * as mockData from '../../Utility/MockData';
jest.mock('../../Utility/Cleaners/cleanResponse');

describe('fetchTopNews', () => {
  let mockUrl, mockDispatch, mockNews

  beforeEach(() => {
    mockUrl = 'www.topnews.com'
    mockDispatch = jest.fn()
    mockNews = mockData.mockTopNews
  });

  it('should disptach isLoading(true)', async () => {
    const thunk = fetchTopNews(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  });

  it('should dispatch hasErrorred if ok is false', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'ooops'
    }))
    const thunk = fetchTopNews(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('ooops'))
  });

  it('it should call cleanResponse with the correct params', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve ({
      ok: true,
      json: () => Promise.resolve(mockNews)
    }))
    const thunk = fetchTopNews(mockUrl)
    await thunk(mockDispatch)
    expect(cleanResponse).toHaveBeenCalledWith(mockNews)
  });

  it('should call cleanResponse if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockNews)
    }))
    const thunk = fetchTopNews(mockUrl)
    await thunk(mockDispatch)
    expect(cleanResponse).toHaveBeenCalled()
  });
  
  it('should dispatch isLoading(false) if the response is complete', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({news: mockNews})
    }))
    const thunk = fetchTopNews(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  });

  it('should dispatch getTopNews if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockNews)
    }))
    const thunk = fetchTopNews(mockUrl)
    await thunk(mockDispatch)
    const result = cleanResponse(mockNews)
    expect(mockDispatch).toHaveBeenCalledWith(getTopNews(result))
  });
});
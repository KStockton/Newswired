import { fetchSportsNews } from '../fetchSportsNews';
import { isLoading, getAllBooks, hasErrored } from '../../actions';
import { cleanNYTBooks } from '../../Utility/Cleaners/cleanNYTBooks';
jest.mock('../../Utility/Cleaners/cleanNYTBooks');

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
});


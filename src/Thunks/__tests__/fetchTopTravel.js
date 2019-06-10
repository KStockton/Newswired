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
  })
})
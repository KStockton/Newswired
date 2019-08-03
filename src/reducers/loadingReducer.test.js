import {loadingReducer} from './loadingReducer';
import * as actions from '../actions/index';

describe('loadingReducer', () => {
  
  it('should return state if the action has no type', () => {
    const mockActions = '';
    const mockState = false;
    const results = loadingReducer(mockState, mockActions);
    expect(results).toEqual(mockState);
  });

  it('should change state to true if isLoading true is passed', () => {
    const mockAction = actions.isLoading(true);
    const mockState = false;
    const expected = true;
    const results = loadingReducer(mockState, mockAction);
   
    expect(results).toEqual(expected);
  });
});
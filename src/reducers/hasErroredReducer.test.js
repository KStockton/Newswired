import { hasErroredReducer } from './hasErroredReducer';

describe('errorReducer', () => {
  it('should return state if the action has no type', () => {
    const mockActions = '';
    const mockState = '';
    const results = hasErroredReducer(mockState, mockActions);
    expect(results).toEqual(mockState);
  });

  it('should return an error message', () => {
    const mockaction = {type: 'HAS_ERROR', message: 'that was bad'};
    const mockState = '';
    const expected = 'that was bad';
    const results = hasErroredReducer(mockState, mockaction);
    expect(results).toEqual(expected);
  });
});
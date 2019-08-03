import { allTopTravelReducer } from './allTopTravelReducer';

describe('allTopTravelReducer', () => {

  it('should return a default state if the action has no type', () => {
    const mockState = [{title:'Golden Headlines'}, {title:'Xavier Basketball'}];
    const mockAction = [];
    const results = allTopTravelReducer(mockState, mockAction);
   
    expect(results).toEqual(mockState);
  });

  it('should return action.travel into state', () => {
    const mockState = [];
    const expected = [{title: 'Michelle'}];
    let mockAction = {type: 'ALL_TRAVEL', travel: expected};
    const results = allTopTravelReducer(mockState, mockAction);
 
    expect(results).toEqual(expected);
  });
});

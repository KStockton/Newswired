import { allTopTravelReducer } from './allTopTravelReducer';

describe('allTopTravelReducer', () =>{
  it('should return a default state if the action has no type', () => {
    const mockState = [{title:'Golden Headlines'},{title:'Xavier Basketball'}]
    const mockAction = []
    const results = allTopTravelReducer(mockState,mockAction)
    expect(results).toEqual(mockState)
  });
});

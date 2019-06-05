import { allTopNewsReducer } from './allTopNewsReducer';

describe('allTopNewsReducer', () =>{
  it('should return a default state if the action has no type', () => {
    const mockState = [{title:'Golden Headlines'},{title:'Xavier Basketball'}]
    const mockAction = []
    const results = allTopNewsReducer(mockState,mockAction)
    expect(results).toEqual(mockState)
  })
});

import { allSportNewsReducer } from './allSportNewsReducer';

describe('allSportNewsReducer', () =>{
  it('should return a default state if the action has no type', () => {
    const mockState = [{title:'Golden'},{title:'Xavier Basketball'}]
    const mockAction = []
    const results = allSportNewsReducer(mockState,mockAction)
    expect(results).toEqual(mockState)
  })
});

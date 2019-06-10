import { allTopNewsReducer } from './allTopNewsReducer';

describe('allTopNewsReducer', () =>{
  it('should return a default state if the action has no type', () => {
    const mockState = [{title:'Golden Headlines'},{title:'Xavier Basketball'}]
    const mockAction = []
    const results = allTopNewsReducer(mockState,mockAction)
    expect(results).toEqual(mockState)
  });

  it('should return action.news into state', () => {
    const mockState = []
    let expected = [{name: 'Michael'},{name: 'Jackson'}]
    const mockAction = {type: 'ALL_TOP_NEWS', news: expected}
    const result = allTopNewsReducer(mockState, mockAction)

    expect(result).toEqual(expected)
  });
});

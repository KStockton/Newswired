import { categoryReducer } from './categoryReducer';

describe('categoryReducer', () =>{
  it('should return a default state if the action has no type', () => {
    const mockState = {topNews: false, books: false, sportsNews: false, travel: false};
    
    const mockAction = '';
    const results = categoryReducer(mockState, mockAction);
    expect(results).toEqual(mockState);
  });
  it('should return a new state if a category is passed', () => {
    const mockState = {topNews: false, books: false, sportsNews: false, travel: false};
    const expected = {topNews: true, books: false, sportsNews: false, travel: false};
    const mockaction = {type: "SET_NEWS_CATEGORY", category: "topNews"};
    
    const results = categoryReducer(mockState, mockaction);
    expect(results).toEqual(expected);
  });
});
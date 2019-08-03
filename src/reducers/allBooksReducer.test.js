import { allBooksReducer } from "./allBooksReducer";

describe('allBooksReducer', () => {

  it('should return a default state if the action has no type', () => {
    const mockState = [];
    const mockAction = '';
    const results = allBooksReducer(mockState, mockAction);

    expect(results).toEqual(mockState);
  });

  it('should return spread allbook into state', () => {
    const mockState = [];
    const expected = [{name: 'Michelle'}];
    let mockAction = {type: 'ALL_BOOKS', books: expected};
    const results = allBooksReducer(mockState, mockAction);

    expect(results).toEqual(expected);
  });
});
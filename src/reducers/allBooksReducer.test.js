import { allBooksReducer } from "./allBooksReducer";
import {cleanNYTBooks} from './../Utility/Cleaners/cleanNYTBooks'
import { isExpressionWrapper } from "@babel/types";



describe('allBooksReducer', () => {

  it('should return a default state if the action has no type', () => {
    const mockState = []
    const mockAction = ''
    const results = allBooksReducer(mockState,mockAction)
    expect(results).toEqual(mockState)
  })
  it('should return spread allbook into state', () => {
    const mockState = []
    const expected = [{name: 'pidgey2'}]
    let mockAction = {type: 'ALL_BOOKS', books: expected}
    const results = allBooksReducer(mockState, mockAction)

    expect(results).toEqual(expected)
  });
});
import { allBooksReducer } from "./allBooksReducer";
import {cleanNYTBooks} from './../Utility/Cleaners/cleanNYTBooks'



describe('allBooksReducer', () => {
  let dirtyBook 
  beforeEach(() => {
  dirtyBook = {
    results:{ 
    books: [{
    bookImage:'www.cool.com', 
   rank: 4, 
   author: 'whodey', id:'2jd;', 
   description:'we note', 
   title: 'cheers', 
   weeksOnList: 100, 
   isfavorited: false}] }
    }
	})
  it('should return a default state if the action has no type', () => {
    const mockState = []
    const mockAction = ''
    const results = allBooksReducer(mockState,mockAction)
    expect(results).toEqual(mockState)
  })
  xit('should return spread allbook into state', () => {
    let mockAction = [{type: 'ALL_BOOKS', bookImage:'www.cool.com', 
    rank: 4, 
    author: 'whodey', id:'2jd;', 
    description:'we note', 
    title: 'cheers', 
    weeksOnList: 100, 
    isfavorited: false}]
    const mockState = []
    const results = allBooksReducer(mockState, dirtybook)
    const cleanBook = cleanNYTBooks(dirtyBook)

   expect(results).toEqual(mockAction)
  })
})
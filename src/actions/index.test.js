import * as action from './index';

describe('actions', () => {
  
  it('it should have a type of IS_LOADING', () => {
    const bool = true

    const expectedAction = {
      type: 'IS_LOADING',
      isLoading: bool
    }
    const result = action.isLoading(bool)
    expect(result).toEqual(expectedAction)
  });

  it('it should have a type of ALL_BOOKS', () => {
    const mockbooks = [{author: 'Adrian Green',title: 'Namaste'}, {author: 'Michael', title: 'Diversity in Schools'}]
    const expectedAction = {
      type: 'ALL_BOOKS',
      books: mockbooks
    }
    const result = action.getAllBooks(mockbooks)
    expect(result).toEqual(expectedAction)
  });

  it('should have a type of SET_NEWS_CATEGORY', () => {
    const mockCategory = 'books';

    const expectedAction = {
      type: 'SET_NEWS_CATEGORY',
      category: mockCategory
    }
    const result = action.setCategories(mockCategory)
    expect(result).toEqual(expectedAction)
  });

  it('should return a message if the action.type is HAS_ERROR', () => {
    const mockMessage = 'Something wrong has occured'
    const expectedAction = {
      type: 'HAS_ERROR',
      message: mockMessage
    }
    const result = action.hasErrored(mockMessage)
    expect(result).toEqual(expectedAction)
  })
  it('should return a sports array if the action.type is', () => {
    const mockSports = [{author: 'ESPN',title: 'Warriors Win'}, {author: 'ABC', title: 'Toronto Wins'}]

    const expectedAction = {
      type: 'ALL_SPORTS',
      sports: mockSports
    }
    const result = action.getSportsNews(mockSports)
    expect(result).toEqual(expectedAction)
  })
});
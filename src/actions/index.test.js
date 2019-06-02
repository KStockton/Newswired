import * as action from './index';

describe('actions', () => {
  it('it should have a type of IS_LOADING', () => {
    const bool = true

    const expectedAction = {
      type: 'IS_LOADING',
      bool
    }
    const result = action.isLoading(bool)

    expect(result).toEqual(expectedAction)
  })
})
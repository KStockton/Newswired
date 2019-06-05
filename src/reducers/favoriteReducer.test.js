import { favoriteReducer } from './favoriteReducer';

describe('favoriteReducer', () =>{
  it('should return a default state if the action has no type', () => {
    const mockState = [{id:'Gergpjnvpnas'},{id:'ka=dslsj'}]
    const mockAction = []
    const results = favoriteReducer(mockState,mockAction)
    expect(results).toEqual(mockState)
  });
});
 
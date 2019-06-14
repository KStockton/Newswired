import { cleanResponse } from './cleanResponse';
import * as mockData from '../mockData';


describe('cleanResponse', () => {

  it('it should take an unclean response and return a cleanresopnse ', () => {
    
    let result = cleanResponse(mockData.uncleanResponse)
      result[0].id = 1
    expect(result).toEqual(mockData.cleanResponse)
  })
})
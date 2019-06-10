import { cleanResponse } from './cleanResponse';
import * as MockData from '../MockData';
const shortid = require('shortid')


describe('cleanResponse', () => {

  it('it should take an unclean response and return a cleanresopnse ', () => {
    
    let result = cleanResponse(MockData.uncleanResponse)
      result[0].id = 1
    expect(result).toEqual(MockData.cleanResponse)
  })

  xit('should call shortId when invoked', () => {
    const anonymousId = 'test-id'
    const v1Spy = jest.spyOn(shortid).mockReturnValue(anonymousId)
    const result = cleanResponse()
    expect(result).toEqual(anonymousId)
  })
})
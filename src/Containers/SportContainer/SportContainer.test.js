import React from 'react'
import { SportContainer, mapStateToProps, mapDispatchToProps} from './SportContainer'
import { shallow } from 'enzyme';
import { fetchSportsNews } from '../../Thunks/fetchSportsNews'
jest.mock('../../Thunks/fetchAllBooks')

describe('SportsContainer',() => {
  let wrapper;
  let mockSports = { allSports :[{title:'Golden'},{title:'Xavier Basketball'}]}
  let mockError = 'something went wrong';
  let mockfetchSportNews = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<SportContainer 
      allSports={mockSports}
      error={mockError}
      fetchSportsNews={mockfetchSportNews}
      />)
  })
  xit('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})
describe('MSTP',() =>{
  it('should map state from mockstate', () => {
    const mockState = { allSports :[{title:'Golden'},{title:'Xavier Basketball'}], error: 'oops'}
    const result = mapStateToProps(mockState)
    expect(result).toEqual(mockState)
  }) 
});
describe('MDTP',() =>{
  const mockDispatch = jest.fn()
  const mappedProps = mapDispatchToProps(mockDispatch)
  xit('should dispatch action when correct params passed', () => {
    const mockUrl = 'www.cool.com'
    const actionToDispatch = fetchSportsNews(mockUrl)
    mappedProps.fetchSportsNews(mockUrl)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  }) 
});
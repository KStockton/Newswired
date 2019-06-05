import React from 'react'
import { TravelContainer, mapStateToProps, mapDispatchToProps} from './TravelContainer'
import { shallow } from 'enzyme';
import { fetchTopTravel } from '../../Thunks/fetchTopTravel'
jest.mock('../../Thunks/fetchAllBooks')

describe('SportsContainer',() => {
  let wrapper;
  let mockTravel = { allTravel :[{title:'New York'},{title:'Boston'}]}
  let mockError = 'something went wrong';
  let mockfetchTravel = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<TravelContainer 
      allTravel={mockTravel}
      error={mockError}
      fetchTopTravel={mockfetchTravel}
      />)
  })
  xit('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})
describe('MSTP',() =>{
  it('should map state from mockstate', () => {
    const mockState = { allTravel :[{title:'Golden'},{title:'Xavier Basketball'}], error: 'oops'}
    const result = mapStateToProps(mockState)
    expect(result).toEqual(mockState)
  });
});
describe('MDTP',() =>{
  const mockDispatch = jest.fn()
  const mappedProps = mapDispatchToProps(mockDispatch)
  xit('should dispatch action when correct params passed', () => {
    const mockUrl = 'www.cool.com'
    const actionToDispatch = fetchTopTravel(mockUrl)
    mappedProps.fetchTopTravel(mockUrl)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  }) 
});
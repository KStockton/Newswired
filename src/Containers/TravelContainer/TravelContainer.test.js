import React from 'react'
import { TravelContainer, mapStateToProps, mapDispatchToProps} from './TravelContainer'
import { shallow } from 'enzyme';
import * as mockData from '../../Utility/MockData'
import { fetchTopTravel } from '../../Thunks/fetchTopTravel'
jest.mock('../../Thunks/fetchTopTravel')

describe('TravelContainer',() => {
  let wrapper;
  let mockTravel  
  let mockError 
  let mockfetchTravel 
  beforeEach(() => {
    mockTravel = mockData.mockTravel
    mockfetchTravel = jest.fn()
    mockError = 'something went wrong'
    wrapper = shallow(<TravelContainer 
      allTravel={mockTravel}
      error={mockError}
      fetchTopTravel={mockfetchTravel}
      />)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should have an error if error !== empty string ', () => {
    const error = mockData.mockRealTravelError
    const allTravel = []
    wrapper.setProps({error})
    wrapper.setProps({allTravel})
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  });

  it('should render loading if allTravel.length is 0 and there is no error', () => {
    const error = ''
    const allTravel = []
    wrapper.setProps({error})
    wrapper.setProps({allTravel})
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  });

  it('should render allTravel when the allTravel.length > 0 is passed', () => {
    let travel = wrapper.instance().displayTravel().length
    expect(travel).toBe(2)
  });

  describe('ComponentDidMount', () => {
    it('should not call fetchTopTravel', () => {

      wrapper.instance().componentDidMount()
      expect(fetchTopTravel).not.toHaveBeenCalled()
    })
  });

    it('should call fetchTopTravel when the componentMounts and allTravel === 0', () => {
      const mockTravel = []
      const mockError = ''

      wrapper = shallow(<TravelContainer
        allTravel={mockTravel}
        error={mockError}
        fetchTopTravel={mockfetchTravel}
        />)
      wrapper.instance().componentDidMount()
      expect(mockfetchTravel).toHaveBeenCalled()
    })

});


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
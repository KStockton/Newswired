import React from 'react'
import { SportContainer, mapStateToProps, mapDispatchToProps} from './SportContainer'
import { shallow } from 'enzyme';
import { fetchSportsNews } from '../../Thunks/fetchSportsNews'
jest.mock('../../Thunks/fetchSportsNews')

describe('SportsContainer',() => {
  let wrapper;
  let mockSports = [{title:'Golden'},{title:'Xavier Basketball'}]
  let mockError = 'something went wrong';
  let mockfetchSportNews = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<SportContainer 
      allSports={mockSports}
      error={mockError}
      fetchSportsNews={mockfetchSportNews}
      />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should render error message if the error is not an empty string and allsports.length === 0', () => {
   const allSports = []
    wrapper.setProps({error: 'something went wrong'})
    wrapper.setProps({allSports})
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  });

  it('should render loading if the component is loading', () => {
    const allSports = []
    const error = ''
    wrapper.setProps({allSports})
    wrapper.setProps({error})
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  });

  it('should call displaySportsNews when rendered',() => {
    wrapper.instance().displaySportNews = jest.fn()
    wrapper.update()
    wrapper.instance().render()
    expect(wrapper.instance().displaySportNews).toHaveBeenCalled()
  });

  it('should render sports when allSports.length > 0', () => {
    let sportCards = wrapper.instance().displaySportNews().length
    expect(sportCards).toBe(2)
  });

 describe('componentDidMount', () => {

  it('should not call fetchSportsNews if allSports already has been fetched',  () => {
    wrapper.instance().componentDidMount()
    expect(mockfetchSportNews).not.toHaveBeenCalled()
  });

  it('should call fetchSportNews with  if allSport.length === 0',  () => {
    const mockNoSports = []
    const mockError = ''
    wrapper = shallow(<SportContainer
      allSports={mockNoSports}
      error={mockError}
      fetchSportsNews={mockfetchSportNews}/>)
      wrapper.instance().componentDidMount()
      expect(mockfetchSportNews).toHaveBeenCalled()
    }) 
  })
});

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

  it('should dispatch action when correct params passed', () => {
    const mockUrl = 'www.cool.com'
    const actionToDispatch = fetchSportsNews(mockUrl)
    mappedProps.fetchSportsNews(mockUrl)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  }) 
});
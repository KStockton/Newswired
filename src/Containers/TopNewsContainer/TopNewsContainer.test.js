import React from 'react';
import { shallow } from 'enzyme';
import * as mockData from './../../Utility/MockData';
import { fetchTopNews } from '../../Thunks/fetchTopNews'
import { TopNewsContainer, mapStateToProps, mapDispatchToProps } from './TopNewsContainer';
jest.mock('../../Thunks/fetchTopNews')

describe('TopNewsContainer', () => {
  let wrapper
  let mockfetchTopNews = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<TopNewsContainer
      allTopNews={mockData.mockTopNews}
      error = {mockData.mockNewsError}
      fetchTopNews={mockfetchTopNews}
      />)
  });

  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  });

  it('should render loading if data is in the process of fetching', () => {
    const allTopNews = []
    const error = mockData.mockNewsError

    wrapper.setProps({allTopNews})
    wrapper.setProps({error})
    wrapper.update()

    expect(wrapper).toMatchSnapshot()
  });

  it('should render an error if an error message is passed', () => {
    const allTopNews = []
    const error = mockData.mockRealNewsError

    wrapper.setProps({allTopNews})
    wrapper.setProps({error})
    wrapper.update()

    expect(wrapper).toMatchSnapshot()
  });

  it('should call displayTopNews when rendered', () => {

    wrapper.instance().displayTopNews = jest.fn()
    wrapper.instance().render()

    expect(wrapper.instance().displayTopNews).toHaveBeenCalled()
  });

    it('should render 2 topNews articles when 2 books are passed', () => {
      let result = wrapper.instance().displayTopNews().length

      expect(result).toBe(2)
    });

    describe('ComponentDidMount', () => {

      it('should not call fetchTopTravel', () => {

        wrapper.instance().componentDidMount()
        expect(mockfetchTopNews).not.toHaveBeenCalled()
      });

      it('should call fetchTopNews when condition is true', () => {
        const mockTopNews = []
        const mockError = ''

        wrapper = shallow(<TopNewsContainer
          allTopNews={mockTopNews}
          error={mockError}
          fetchTopNews={mockfetchTopNews}
          />)

        wrapper.instance().componentDidMount()
        expect(mockfetchTopNews).toHaveBeenCalled()
      })
   })
});

describe('MSTP', () => {

  it('should map state from mockstate', () => {

    const mockState = { allTopNews :[{title:'Golden'},{title:'Xavier Basketball'}], error: 'oops'}
    const result = mapStateToProps(mockState)

    expect(result).toEqual(mockState)
  });
});

describe('MDTP',() =>{
  
  const mockDispatch = jest.fn()
  const mappedProps = mapDispatchToProps(mockDispatch)

  it('should dispatch action when correct params passed', () => {
    const mockUrl = 'www.cool.com'
    const actionToDispatch = fetchTopNews(mockUrl)
    
    mappedProps.fetchTopNews(mockUrl)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  }); 
});
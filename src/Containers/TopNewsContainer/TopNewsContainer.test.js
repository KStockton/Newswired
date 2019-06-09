import React from 'react';
import { shallow } from 'enzyme';
import * as mockData from './../../Utility/MockData';
import { fetchTopNews } from '../../Thunks/fetchTopNews'
import { TopNewsContainer, mapStateToProps, mapDispatchToProps } from './TopNewsContainer';
jest.mock('../../Thunks/fetchTopNews')

describe('TopNewsContainer', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<TopNewsContainer
      allTopNews={mockData.mockTopNews}
      error = {mockData.mockNewsError}
      fetchTopNews={fetchTopNews}
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
  })
})
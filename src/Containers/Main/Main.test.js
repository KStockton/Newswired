import React from 'react';
import { shallow } from 'enzyme';
import {Main, mapStateToProps} from './Main';

describe('Main',() => {
  let wrapper
    let mockcategories = {books: true, travel: true, topNews: true, sportsNews: true}
  beforeEach(() => {
    wrapper = shallow(<Main categories={mockcategories}/>)
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  describe('MSTP',() =>{
    it('should map state from mockstate', () => {
      const mockState ={ categories:{books: true, travel: true, topNews: true, sportsNews: true}}
      const result = mapStateToProps(mockState)
      expect(result).toEqual(mockState)
    }) 
  })
})
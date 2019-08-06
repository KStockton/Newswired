import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import { Main, mapStateToProps} from './Main';

describe('Main', () => {
  let wrapper;
  let mockcategories = {books: true, travel: true, topNews: true, sportsNews: true};
  
  beforeEach(() => {
    wrapper = shallow(<Main categories={mockcategories}/>);
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Clicking on NewsWire should take you back to /Options', () => {
    expect(wrapper.find(Link).props().to).toBe('/Options');
  });

  describe('MSTP', () =>{

    it('should map state from mockstate', () => {
      const mockState ={ categories:{ books: true, travel: true, topNews: true, sportsNews: true}};
      const result = mapStateToProps(mockState);
      expect(result).toEqual(mockState);
    });
  });
});
import React from 'react';
import { shallow } from 'enzyme';
import {Book} from './Book';
import {Link} from 'react-router-dom';


describe('Book', () => {
  let wrapper;
  let mockProp = jest.fn();
  let mockId = 3;
  
  beforeEach(() => {
    wrapper = shallow(<Book toggleFavorite={mockProp} id={mockId}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when props are passed', () => {
    let mockbookImage = "http://win.com";
    let mockrank = 1;
    let mockauthor = "Michele Obama";
    let mockdescription = 'effort';
    let mocktitle = 'Overcome';
    let mockweeksOnList = 2;

    const wrapper = shallow(<Book
      bookImage={mockbookImage}
      rank={mockrank}
      description={mockdescription}
      author={mockauthor}
      title={mocktitle}
      weeksOnList={mockweeksOnList}
      toggleFavorite={mockProp}
    />);
    
    expect(wrapper).toMatchSnapshot();
  });

  it('Link should have a prop of /card/3 when a user clicks the link', () => {

    let mockId = 3;
    const wrapper = shallow(<Book id={mockId}/>);
    expect(wrapper.find(Link).props().to).toBe('/card/3');
  });

  it('should call togglefavorite when img is clicked', () => {
    wrapper.find('#img-test').simulate('click');
    expect(mockProp).toHaveBeenCalled();
  });

  it('toggle faavorites should be called with the it', () => {
    wrapper.find('#img-test').simulate('click');
    expect(mockProp).toHaveBeenCalledWith(3);
  });

});
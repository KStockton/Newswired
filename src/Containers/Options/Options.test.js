import React from 'react';
import { NavLink } from 'react-router-dom';
import { Options, mapStateToProps, mapDispatchToProps} from './Options';
import { shallow } from 'enzyme';
import { setCategories } from '../../actions/index';


const mockSelectTopic = jest.fn()

describe('Option', () => {
  let wrapper;
  let mockcategories = {categories:{books: true, travel: true, topNews: true, sportsNews: true}}
  let mockSetCategories

  beforeEach(() => { 
    mockSetCategories =jest.fn()
    wrapper = shallow(<Options 
      selectTopic ={mockSelectTopic}
      categories={mockcategories} 
      setCategories={mockSetCategories}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should only render topSports icon its true', () => {
    const categories = {categories:{books: false, travel: false, topNews: false, sportsNews: true}}
    wrapper.setProps({categories})
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  });

  it('should render topNews if its true', () => {
    const categories = {categories:{books: false, travel: false, topNews: true, sportsNews: false}}
    wrapper.setProps({categories})
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  });


  it('should render books if its true', () => {
    const categories = {categories:{books: true, travel: false, topNews: false, sportsNews: false}}
    wrapper.setProps({categories})
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  });

  it('should render travel if its true', () => {
    const categories = {categories:{books: false, travel: true, topNews: false, sportsNews: false}}
    wrapper.setProps({categories})
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  });

  it('should render next arrow when one category is selected', () => {
    const categories = {categories:{books: true, travel: false, topNews: false, sportsNews: false}}
    const numOfCategories = 3
      
    wrapper.setProps({categories})
    wrapper.setProps({numOfCategories})
    wrapper.setProps({ NavLink })
    wrapper.update() 
    expect(wrapper).toMatchSnapshot()
  }); 

  it('should call selectTopic when button is clicked', () => {
    wrapper.find('button').at(0).simulate('click', { target : { name : 'topNews'}})
    expect(mockSetCategories).toHaveBeenCalledWith('topNews') 
  });

  it('should call selectTopic when button is clicked', () => {
    wrapper.find('button').at(1).simulate('click', { target : { name : 'books'}})
    expect(mockSetCategories).toHaveBeenCalledWith('books') 
  });

  it('should call selectTopic when button is clicked', () => {
    wrapper.find('button').at(2).simulate('click', { target : { name : 'sportsNews'}})
    expect(mockSetCategories).toHaveBeenCalledWith('sportsNews') 
  });

  it('should call selectTopic when button is clicked', () => {
    wrapper.find('button').at(3).simulate('click', { target : { name : 'travel'}})
    expect(mockSetCategories).toHaveBeenCalledWith('travel') 
  });

});
 
describe('MSTP',() =>{

  it('should map state from mockstate', () => {
    const mockState ={ categories:{books: true, travel: true, topNews: true, sportsNews: true}}
    const result = mapStateToProps(mockState)
    expect(result).toEqual(mockState)
  }) 
}) 

describe('MDTP',() =>{
  const mockDispatch = jest.fn()
  const mappedProps = mapDispatchToProps(mockDispatch)

  it('should dispatch action when correct params passed', () => {
    const mockCategory = 'travel'
    const actionToDispatch = setCategories(mockCategory)
    mappedProps.setCategories(mockCategory)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch) 
  }); 
});   
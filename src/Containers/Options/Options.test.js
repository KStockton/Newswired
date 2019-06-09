import React from 'react'
import { Options, mapStateToProps, mapDispatchToProps} from './Options'
import { shallow } from 'enzyme'
import { setCategories } from '../../actions/index'


describe('Option', () => {
  let wrapper;
  let mockcategories = {categories:{books: true, travel: true, topNews: true, sportsNews: true}}
  let mockSetCategories = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<Options 
      categories={mockcategories} 
      setCategories={mockSetCategories}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should only render topSports icon its true', () => {
    const categories = {categories:{books: false, travel: false, topNews: false, sportsNews: true}}
    wrapper.setProps({categories})
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })

  it('should render topNews if its true', () => {
    const categories = {categories:{books: false, travel: false, topNews: true, sportsNews: false}}
    wrapper.setProps({categories})
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })

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
  })
})
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
  }) 
})  
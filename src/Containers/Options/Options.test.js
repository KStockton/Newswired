import React from 'react'
import { Options, mapStateToProps, mapDispatchToProps} from './Options'
import { shallow } from 'enzyme'
import { setCategories} from '../../actions/index'


describe('Option', () => {
  let wrapper;
  let mockcategories = {categories:{books: true, travel: true, topNews: true, sportsNews: true}}
  let mockSetCategories = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<Options categories={mockcategories} setCategories={mockSetCategories}/>)
  })

  it('should match the snapshot', () => {
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
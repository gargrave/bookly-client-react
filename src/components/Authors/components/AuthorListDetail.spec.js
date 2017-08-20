import React from 'react'
import { shallow } from 'enzyme'

import { authorsMockData } from '../../../utils/mocks/data/authors-mock-data'
import AuthorListDetail from './AuthorListDetail'

describe('AuthorListDetail', () => {
  let props
  let component

  beforeEach(() => {
    props = {
      author: Object.create(authorsMockData[0]),
      onClick: jest.fn()
    }

    component = shallow(<AuthorListDetail {...props} />)
  })

  test('renders correctly', () => {
    const element = component.find('.author-list-detail')
    expect(component).toMatchSnapshot()
    expect(element.length).toEqual(1)
  })

  test("renders the author's name", () => {
    const text = component.find('.author-list-detail .author-name').text()
    expect(text.indexOf(`${props.author.firstName} ${props.author.lastName}`)).not.toEqual(-1)
  })

  test('calls the "onClick" callback when the component is clicked', () => {
    expect(props.onClick.mock.calls.length).toEqual(0)
    component.simulate('click')
    expect(props.onClick.mock.calls.length).toEqual(1)
  })
})

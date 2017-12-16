import React from 'react'
import { shallow } from 'enzyme'

import { authorsMockData } from '@/utils/mocks/data/authors-mock-data'

import AuthorDetailView from './'

describe('AuthorDetailView', () => {
  let props
  let component

  beforeEach(() => {
    props = {
      author: Object.create(authorsMockData[0]),
      onBackClick: jest.fn(),
      onEditClick: jest.fn(),
    }

    component = shallow(<AuthorDetailView {...props} />)
  })

  test('renders correctly', () => {
    const element = component.find('.author-detail-view')
    expect(component).toMatchSnapshot()
    expect(element.length).toEqual(1)
  })

  test("renders the author's name", () => {
    const text = component.find('.author-name').text()
    expect(text.indexOf(`${props.author.firstName} ${props.author.lastName}`)).not.toEqual(-1)
  })

  test("renders the author's 'added on' date", () => {
    const text = component.find('.author-added-on').text()
    expect(text.indexOf(props.author.createdAt)).not.toEqual(-1)
  })

  test("renders the author's 'updated on' date", () => {
    const text = component.find('.author-updated-on').text()
    expect(text.indexOf(props.author.updatedAt)).not.toEqual(-1)
  })
})

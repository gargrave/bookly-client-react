import React from 'react'
import { shallow } from 'enzyme'

import { authorsMockData } from '../../../../utils/mocks/data/authors-mock-data'
import AuthorEditView from '../../../../components/Authors/components/AuthorEditView'
import AuthorForm from '../../../../components/Authors/components/AuthorForm'

describe('AuthorEditView', () => {
  let props
  let component

  beforeEach(() => {
    props = {
      author: Object.create(authorsMockData[0]),
      handleInputChange: jest.fn(),
      handleSubmit: jest.fn(),
      handleCancel: jest.fn()
    }

    component = shallow(<AuthorEditView {...props} />)
  })

  test('renders correctly', () => {
    const element = component.find('.author-edit-view')
    expect(component).toMatchSnapshot()
    expect(element.length).toEqual(1)
  })

  test('renders the AuthorForm component', () => {
    expect(component.find(AuthorForm).length).toEqual(1)
  })
})

import React from 'react'
import { shallow } from 'enzyme'

import { authorsMockData } from '@/utils/mocks/data/authors-mock-data'

import Button from '@/components/common/Button'
import InputField from '@/components/common/InputField'

import AuthorForm from './'

describe('AuthorForm', () => {
  let props
  let component

  describe('with "author" populated', () => {
    beforeEach(() => {
      props = {
        author: Object.create(authorsMockData[0]),
        onInputChange: jest.fn(),
        onSubmit: jest.fn(),
        onCancel: jest.fn(),
      }

      component = shallow(<AuthorForm {...props} />)
    })

    test('renders correctly', () => {
      expect(component).toMatchSnapshot()
      expect(component.find('.bookly-form.bookly-author-form').length).toEqual(1)
      expect(component.find(Button).length).toEqual(2)
      expect(component.find(InputField).length).toEqual(2)
    })
  })
})

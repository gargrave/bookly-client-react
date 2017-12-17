import React from 'react'
import { shallow } from 'enzyme'

import Button from '@/components/common/Button'

import BookForm from './'

describe('BookForm', () => {
  let props
  let component

  describe('with "book" populated', () => {
    beforeEach(() => {
      props = {
        book: { title: '', author: {} },
        authors: [],
        handleAuthorChange: jest.fn(),
        handleInputChange: jest.fn(),
        handleSubmit: jest.fn(),
        handleCancel: jest.fn(),
      }

      component = shallow(<BookForm {...props} />)
    })

    test('renders correctly', () => {
      expect(component).toMatchSnapshot()
      expect(component.find('form.bookly-form').length).toEqual(1)
      expect(component.find('form.bookly-book-form').length).toEqual(1)
      expect(component.find('input[type="text"]').length).toEqual(1)
      expect(component.find(Button).length).toEqual(2)
    })
  })
})

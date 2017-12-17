import React from 'react'
import { shallow } from 'enzyme'

import Button from '@/components/common/Button'
import InputField from '@/components/common/InputField'

import BookForm from './'

describe('BookForm', () => {
  let props
  let component

  describe('with "book" populated', () => {
    beforeEach(() => {
      props = {
        book: { title: '', author: {} },
        authors: [],
        onAuthorChange: jest.fn(),
        onInputChange: jest.fn(),
        onSubmit: jest.fn(),
        onCancel: jest.fn(),
      }

      component = shallow(<BookForm {...props} />)
    })

    test('renders correctly', () => {
      expect(component).toMatchSnapshot()
      expect(component.find('.bookly-form.bookly-book-form').length).toEqual(1)
      expect(component.find(InputField).length).toEqual(1)
      expect(component.find(Button).length).toEqual(2)
    })
  })
})

import React from 'react'
import { shallow } from 'enzyme'

import { authorsMockData } from '@/utils/mocks/data/authors-mock-data'
import AuthorForm from './'

describe('AuthorForm', () => {
  let props
  let component

  describe('with "author" populated', () => {
    beforeEach(() => {
      props = {
        author: Object.create(authorsMockData[0]),
        handleInputChange: jest.fn(),
        handleSubmit: jest.fn(),
        handleCancel: jest.fn(),
      }

      component = shallow(<AuthorForm {...props} />)
    })

    test('renders correctly', () => {
      expect(component).toMatchSnapshot()
      expect(component.find('form.author-form').length).toEqual(1)
      expect(component.find('input[type="text"]').length).toEqual(2)
      expect(component.find('button.submit-button').length).toEqual(1)
      expect(component.find('button.cancel-button').length).toEqual(1)
    })

    test('populates the "firstName" field correctly', () => {
      const text = component.find('input[name="firstName"]').props().value
      expect(text).toEqual(props.author.firstName)
    })

    test('populates the "lastName" field correctly', () => {
      const text = component.find('input[name="lastName"]').props().value
      expect(text).toEqual(props.author.lastName)
    })

    test('calls the "handleSubmit" callback when the form is submitted', () => {
      expect(props.handleSubmit.mock.calls.length).toEqual(0)
      component.simulate('submit')
      expect(props.handleSubmit.mock.calls.length).toEqual(1)
    })

    test('calls the "handleSubmit" callback when the button is clicked', () => {
      expect(props.handleSubmit.mock.calls.length).toEqual(0)
      component.find('button.submit-button').simulate('click')
      expect(props.handleSubmit.mock.calls.length).toEqual(1)
    })

    test('calls the "handleCancel" callback when the button is clicked', () => {
      expect(props.handleCancel.mock.calls.length).toEqual(0)
      component.find('button.cancel-button').simulate('click')
      expect(props.handleCancel.mock.calls.length).toEqual(1)
    })

    test('calls the "handleInputChange" callback when "firstName" value changes', () => {
      const beforeLen = props.handleInputChange.mock.calls.length
      component.find('input[name="firstName"]').simulate('change')
      expect(props.handleInputChange.mock.calls.length).toEqual(beforeLen + 1)
    })

    test('calls the "handleInputChange" callback when "lastName" value changes', () => {
      const beforeLen = props.handleInputChange.mock.calls.length
      component.find('input[name="lastName"]').simulate('change')
      expect(props.handleInputChange.mock.calls.length).toEqual(beforeLen + 1)
    })
  })

  describe('with empty "author" data', () => {
    beforeEach(() => {
      props = {
        author: { firstName: '', lastName: '' },
        handleInputChange: jest.fn(),
        handleSubmit: jest.fn(),
        handleCancel: jest.fn(),
      }

      component = shallow(<AuthorForm {...props} />)
    })

    test('leaves the "firstName" input field blank', () => {
      const text = component.find('input[name="firstName"]').props().value
      expect(text.length).toEqual(0)
    })

    test('leaves the "lastName" input field blank', () => {
      const text = component.find('input[name="lastName"]').props().value
      expect(text.length).toEqual(0)
    })
  })
})

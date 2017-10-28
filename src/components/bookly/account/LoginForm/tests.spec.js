import React from 'react'
import { shallow } from 'enzyme'

import LoginForm from './'

describe('LoginForm', () => {
  let props
  let component

  describe('with "user" populated', () => {
    beforeEach(() => {
      props = {
        user: { email: 'whatever@gmail.com', password: 'password' },
        handleInputChange: jest.fn(),
        handleSubmit: jest.fn(),
      }

      component = shallow(<LoginForm {...props} />)
    })

    test('renders correctly', () => {
      expect(component).toMatchSnapshot()
      expect(component.find('form.login-form').length).toEqual(1)
      expect(component.find('input[type="email"]').length).toEqual(1)
      expect(component.find('input[type="password"]').length).toEqual(1)
      expect(component.find('button.submit-button').length).toEqual(1)
    })

    test('populates the "email" field correctly', () => {
      const text = component.find('input[name="email"]').props().value
      expect(text).toEqual(props.user.email)
    })

    test('populates the "password" field correctly', () => {
      const text = component.find('input[name="password"]').props().value
      expect(text).toEqual(props.user.password)
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

    test('calls the "handleInputChange" callback when "email" value changes', () => {
      const beforeLen = props.handleInputChange.mock.calls.length
      component.find('input[name="email"]').simulate('change')
      expect(props.handleInputChange.mock.calls.length).toEqual(beforeLen + 1)
    })

    test('calls the "handleInputChange" callback when "password" value changes', () => {
      const beforeLen = props.handleInputChange.mock.calls.length
      component.find('input[name="password"]').simulate('change')
      expect(props.handleInputChange.mock.calls.length).toEqual(beforeLen + 1)
    })
  })

  describe('with empty "user" data', () => {
    beforeEach(() => {
      props = {
        user: { email: '', password: '' },
        handleInputChange: jest.fn(),
        handleSubmit: jest.fn(),
      }

      component = shallow(<LoginForm {...props} />)
    })

    test('leaves the "email" input field blank', () => {
      const text = component.find('input[name="email"]').props().value
      expect(text.length).toEqual(0)
    })

    test('leaves the "password" input field blank', () => {
      const text = component.find('input[name="password"]').props().value
      expect(text.length).toEqual(0)
    })
  })
})

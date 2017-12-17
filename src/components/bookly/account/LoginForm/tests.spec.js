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
        onInputChange: jest.fn(),
        onSubmit: jest.fn(),
      }

      component = shallow(<LoginForm {...props} />)
    })

    test('renders correctly', () => {
      expect(component).toMatchSnapshot()
      expect(component.find('form.bookly-form').length).toEqual(1)
      expect(component.find('form.bookly-login-form').length).toEqual(1)
      expect(component.find('input[type="email"]').length).toEqual(1)
      expect(component.find('input[type="password"]').length).toEqual(1)
    })

    test('populates the "email" field correctly', () => {
      const text = component.find('input[name="email"]').props().value
      expect(text).toEqual(props.user.email)
    })

    test('populates the "password" field correctly', () => {
      const text = component.find('input[name="password"]').props().value
      expect(text).toEqual(props.user.password)
    })

    test('calls the "onSubmit" callback when the form is submitted', () => {
      expect(props.onSubmit.mock.calls.length).toEqual(0)
      component.simulate('submit')
      expect(props.onSubmit.mock.calls.length).toEqual(1)
    })

    test('calls the "onInputChange" callback when "email" value changes', () => {
      const beforeLen = props.onInputChange.mock.calls.length
      component.find('input[name="email"]').simulate('change')
      expect(props.onInputChange.mock.calls.length).toEqual(beforeLen + 1)
    })

    test('calls the "onInputChange" callback when "password" value changes', () => {
      const beforeLen = props.onInputChange.mock.calls.length
      component.find('input[name="password"]').simulate('change')
      expect(props.onInputChange.mock.calls.length).toEqual(beforeLen + 1)
    })
  })

  describe('with empty "user" data', () => {
    beforeEach(() => {
      props = {
        user: { email: '', password: '' },
        onInputChange: jest.fn(),
        onSubmit: jest.fn(),
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

import React from 'react'
import { shallow } from 'enzyme'

import InputField from '@/components/common/InputField'

import LoginForm from './'

describe('LoginForm', () => {
  let props
  let component

  describe('basic rendering', () => {
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
      expect(component.find('.bookly-form').length).toEqual(1)
      expect(component.find('.bookly-login-form').length).toEqual(1)
      expect(component.find(InputField).length).toEqual(2)
    })
  })
})

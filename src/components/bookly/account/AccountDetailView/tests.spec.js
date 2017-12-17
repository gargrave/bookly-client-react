import React from 'react'
import { shallow } from 'enzyme'

import { usersMockData } from '@/utils/mocks/data/users-mock-data'
import AccountDetailView from './'

describe('AccountDetailView', () => {
  let props
  let component

  beforeEach(() => {
    props = {
      user: Object.create(usersMockData[0]),
    }

    component = shallow(<AccountDetailView {...props} />)
  })

  test('renders correctly', () => {
    const element = component.find('.account-detail-view')
    expect(component).toMatchSnapshot()
    expect(element.length).toEqual(1)
  })

  test("renders the user's email address", () => {
    const text = component.find('.email-display').text()
    expect(text.indexOf(props.user.email)).not.toEqual(-1)
  })
})

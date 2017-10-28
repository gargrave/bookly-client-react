import React from 'react'
import { shallow } from 'enzyme'

import AuthorList from './'

describe('AuthorList', () => {
  let component
  let props

  beforeEach(() => {
    props = {
      authors: [],
      onAuthorClick: jest.fn(),
    }
    component = shallow(<AuthorList {...props} />)
  })

  it('matches the snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})

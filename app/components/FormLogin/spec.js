import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { FormLogin } from './'

describe('<FormLogin />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <FormLogin />
    )
    expect(renderedComponent).toExist()
  })
  it('should call a function when button is clicked', () => {
    const renderedComponent = shallow(
      <FormLogin />
    )

  })
})

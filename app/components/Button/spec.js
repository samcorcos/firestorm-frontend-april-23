import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { Button } from './'

describe('<Button />', () => {
  it('should render its children', () => {
    const children = (<p>Test</p>)
    const renderedComponent = shallow(
      <Button type="primary">
        { children }
      </Button>
    )
    expect(renderedComponent.contains(children))
  })
  it('should render a <button> element', () => {
    const renderedComponent = shallow(
      <Button type="primary">
        Test
      </Button>
    )
    expect(renderedComponent.find('button').length)
  })
  it('should take in "primary" as a type', () => {
    const renderedComponent = shallow(
      <Button type="primary">
        Test
      </Button>
    )
    expect(renderedComponent.node.props.styleName).toEqual("primary")
  })
  it('should take in "flat" as a type', () => {
    const renderedComponent = shallow(
      <Button type="flat">
        Test
      </Button>
    )
    expect(renderedComponent.node.props.styleName).toEqual("flat")
  })
  it('should take in "disabled" as a type', () => {
    const renderedComponent = shallow(
      <Button type="disabled">
        Test
      </Button>
    )
    expect(renderedComponent.node.props.styleName).toEqual("disabled")
  })
  it('should handle click events', () => {
    const onClickSpy = expect.createSpy()
    const renderedComponent = shallow(
      <Button onClick={onClickSpy} type="primary">
        Test
      </Button>
    )
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  })
})

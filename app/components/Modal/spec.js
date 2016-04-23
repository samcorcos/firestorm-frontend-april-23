import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { Modal } from './'

describe('<Modal />', () => {
  it('should render its children', () => {
    const children = (<div>Test</div>)
    const close = () => {}
    const renderedComponent = shallow(
      <Modal isOpen={true} close={close}>
        { children }
      </Modal>
    )
    expect(renderedComponent.contains(children))
  })
  it('should call props.close when backdrop is clicked', () => {
    const onClickSpy = expect.createSpy()
    const renderedComponent = shallow(
      <Modal isOpen={true} close={onClickSpy}>
        Test
      </Modal>
    )
    renderedComponent.find({ styleName: 'backdrop' }).simulate('click')
    expect(onClickSpy).toHaveBeenCalled()
  })
  it('should call props.close when x is clicked', () => {
    const onClickSpy = expect.createSpy()
    const renderedComponent = shallow(
      <Modal isOpen={true} close={onClickSpy}>
        Test
      </Modal>
    )
    renderedComponent.find({ styleName: 'close' }).simulate('click')
    expect(onClickSpy).toHaveBeenCalled()
  })
  it('should display when `isOpen` is `true`', () => {
    const close = () => {}
    const renderedComponent = shallow(
      <Modal isOpen={true} close={close}>
        Test
      </Modal>
    )
    expect(renderedComponent.node.props.style.display).toEqual("flex")
  })
  it('should not display when `isOpen` is `false`', () => {
    const close = () => {}
    const renderedComponent = shallow(
      <Modal isOpen={false} close={close}>
        Test
      </Modal>
    )
    expect(renderedComponent.node.props.style.display).toEqual("none")
  })
})

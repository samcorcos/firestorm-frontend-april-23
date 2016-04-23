import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

export class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  stopProp(e) {
    e.stopPropagation()
  }

  render() {
    return (
      <div
        styleName='backdrop'
        onClick={ this.props.close }
        style={{ display: this.props.isOpen ? "flex" : "none" }}>
        <div
          onClick={ this.stopProp.bind(this) }
          styleName='modal'>
          <div
            onClick={ this.props.close }
            styleName="close">
            x
          </div>
          { this.props.children }
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  close: React.PropTypes.func.isRequired,
  isOpen: React.PropTypes.bool.isRequired,
  children: React.PropTypes.node.isRequired
}

export default CSSModules(Modal, style)

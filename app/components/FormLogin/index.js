import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

import Button from 'components/Button'

export class FormLogin extends React.Component {
  constructor(props) {
    super(props)
  }

  submit(e) {
    console.log("Submit button clicked")
  }

  render() {
    return (
      <div styleName="wrapper">
        <div styleName="form">
          <div styleName="input-group">
            <label htmlFor="signup-email">Email</label>
            <input styleName="input" type="text" id="signup-email" />
          </div>
          <div styleName="input-group">
            <label htmlFor="signup-password">Password</label>
            <input styleName="input" type="password" id="signup-password" />
          </div>
        </div>
        <Button
          onClick={this.submit.bind(this)}
          type="primary">
          Submit
        </Button>
      </div>
    )
  }
}

export default CSSModules(FormLogin, style)

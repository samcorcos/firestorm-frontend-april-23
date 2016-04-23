import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'
import { connect } from 'react-redux'
import Actions from 'redux/actions'

import Button from 'components/Button'

export class FormLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  submit() {
    const user = {
      email: this.state.user,
      password: this.state.password
    }
    this.props.dispatch(Actions.userLogin(user))
  }

  handleChange(input, e) {
    this.setState({
      [input]: e.target.value
    })
  }

  render() {
    return (
      <div styleName="wrapper">
        <div styleName="form">
          <div styleName="input-group">
            <label htmlFor="signup-email">Email</label>
            <input
              onChange={this.handleChange.bind(this, "email")}
              styleName="input"
              type="text"
              id="signup-email" />
          </div>
          <div styleName="input-group">
            <label htmlFor="signup-password">Password</label>
            <input
              onChange={this.handleChange.bind(this, "password")}
              styleName="input"
              type="password"
              id="signup-password" />
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

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(CSSModules(FormLogin, style))

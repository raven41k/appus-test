import React from 'react'
import { Redirect } from 'react-router-dom'
import logo from '../logo.png'

class Login extends React.Component {
  state = {
    redirectToPreviousRoute: false,
    username: '',
    password: '',
  }

  handleSubmit = e => {
    e.preventDefault()
    const { username, password } = this.state

    this.props.logIn(
      {
        username,
        password,
      },
      () => {
        this.setState({ redirectToPreviousRoute: true })
      }
    )
  }

  handleChange = e => {
    const value = e.currentTarget.value
    const fieldName = e.currentTarget.dataset.fieldName

    this.setState(prev => ({
      ...prev,
      [fieldName]: value,
    }))
  }

  render() {
    const { location, errorMsg } = this.props
    const { from } = location.state || { from: { pathname: '/weather' } }
    const { username, password, redirectToPreviousRoute } = this.state

    if (redirectToPreviousRoute) {
      return <Redirect to={from} />
    }

    return (
      <div>
        <img src={logo} alt="logo"/>
        {errorMsg && <p>{errorMsg}</p>}
        <form onSubmit={this.handleSubmit}>
          <input
            data-field-name={'username'}
            type={'text'}
            onChange={this.handleChange}
            placeholder={'Name'}
            value={username}
          />
          <input
            data-field-name={'password'}
            type={'password'}
            onChange={this.handleChange}
            placeholder={'Password'}
            value={password}
          />
          <button type="submit">Enter</button>
        </form>
      </div>
    )
  }
}


export default Login

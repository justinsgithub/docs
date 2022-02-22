import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { useToken } from '../auth/useToken'
import '../index.css'

const LogInPage = () => {
  const [token, setToken] = useToken()
  const [errorMessage, setErrorMessage] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const history = useHistory()

  const onLoginClicked = async () => {
    const response = await axios.post('/api/login', {
      email: emailValue,
      password: passwordValue,
    })
    const { token } = response.data

    setToken(token)
    history.push('/')
  }

  return (
    <div className='content-container'>
      <h1>Log in</h1>

      {errorMessage && <div className='fail'>{errorMessage}</div>}

      <input
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        type='text'
        placeholder='example@example.com'
      />

      <input
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
        type='password'
        placeholder='password'
      />

      <hr />
      <button disabled={!emailValue || !passwordValue} onClick={onLoginClicked}>
        Log In
      </button>

      <button onClick={() => history.push('/forgot-password')}>
        Forgot your password?
      </button>

      <button onClick={() => history.push('/signup')}>
        Don't have an account? Sign up
      </button>
    </div>
  )
}

export default LogInPage

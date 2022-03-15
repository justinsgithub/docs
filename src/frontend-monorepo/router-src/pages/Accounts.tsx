import { useAuth } from '../utils/auth'
import { useNavigate } from 'react-router-dom'

export const Accounts = () => {
  const auth:any = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    auth.logout()
    navigate('/', {replace: true})
  }
  return (
  <>
      <h2>Accounts for {auth.user}</h2>
      <button onClick={handleLogout}>Logout</button>
      <ul>
        <li>Bank Routing Number: 5555555555</li>
        <li>Bank Account Number: 555555555555555</li>
      </ul>
  </>
  )
}

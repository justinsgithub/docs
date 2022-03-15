import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // useSelector allows us to use the state we want
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    console.log('logout')
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>GoalSetter</Link>
      </div>
      {user ? (
        <ul>
          <li>
            <button onClick={onLogout} className="btn">
              <FaSignOutAlt />
              Logout
            </button>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to='/login'>
              <FaSignInAlt />
              Login
            </Link>
          </li>
          <li>
            <Link to='/register'>
              <FaUser />
              Register
            </Link>
          </li>
        </ul>
      )}
    </header>
  )
}

export default Header

import { Link } from 'react-router-dom'
import './header.styles.scss'
import { CartIcon } from '../cart-icon/cart-icon'

const Header = () => {
  return (
    <nav className='nav-menu container'>
      <div className='logo'>
        <Link to='/'>COFFEE</Link>
      </div>
      <ul>
        <li> <Link to='/'> Home </Link> </li>{' '}
        <li> <Link to='/shop'> Purchase </Link> </li>{' '}
      </ul>
      <CartIcon />
    </nav>
  )
}

export default Header
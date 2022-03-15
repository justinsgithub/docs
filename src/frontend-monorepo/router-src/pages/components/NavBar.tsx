import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../utils/auth'



export const NavBar: React.FC = () => {

  const navLinkStyles = ({ isActive }: any) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline'
    }
  }

  const auth:any = useAuth()

  return (
    <nav className='primary-nav'>
      <NavLink style={navLinkStyles} to='/'>Home</NavLink>
      <NavLink style={navLinkStyles}to='/accounts'>Accounts</NavLink>
      <NavLink style={navLinkStyles}to='/books'>Books</NavLink>
      <NavLink style={navLinkStyles}to='/contacts'>Contacts</NavLink>
      <NavLink style={navLinkStyles} to='/notes'>Notes</NavLink>
      <NavLink style={navLinkStyles}to='/tasks'>Tasks</NavLink>
      <NavLink style={navLinkStyles}to='/writings'>Writings</NavLink>
    {!auth.user && (
      <NavLink style={navLinkStyles}to='/login'>Login</NavLink>
    )}
    </nav>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'



export const NavBar: React.FC = () => {

  const navLinkStyles = ({ isActive }: any) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline'
    }
  }

  return (
    <nav className='primary-nav'>
      <NavLink style={navLinkStyles} to='/'>Home</NavLink>
      <NavLink style={navLinkStyles} to='/notes'>Notes</NavLink>
      <NavLink style={navLinkStyles}to='/tasks'>Tasks</NavLink>
      <NavLink style={navLinkStyles}to='/contacts'>Contacts</NavLink>
      <NavLink style={navLinkStyles}to='/books'>Books</NavLink>
    </nav>
  )
}

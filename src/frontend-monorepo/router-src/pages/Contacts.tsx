import { Link, Outlet } from 'react-router-dom'

export const Contacts = () => {
  return (
    <>
      <div>
        <input type='search' placeholder='Search Contacts' />
      </div>
      <nav>
        <Link to='family'>Family</Link>
        <Link to='work'>Work</Link>
        <Link to='/contacts/other'>Other</Link>
      </nav>
      <Outlet />
    </>
  )
}

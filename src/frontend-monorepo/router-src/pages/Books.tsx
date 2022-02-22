import { Outlet, useSearchParams } from 'react-router-dom'

export const Books = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const showUnreadBooks = searchParams.get('filter') === 'unread'

  return (
    <>
      <div>
        <button onClick={() => setSearchParams({ filter: 'unread' })}>
          Unread Books
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      {showUnreadBooks ? <h2>Should be showing unread books</h2> : <h2>Showing all books</h2>}
      <div>
        <ul>
          <li>Harry Potter 1</li>
          <li>Harry Potter 2</li>
          <li>Harry Potter 3</li>
          <li>Harry Potter 4</li>
          <li>Harry Potter 5</li>
          <li>Harry Potter 6</li>
          <li>Harry Potter 7</li>
          <li>Saint Odd</li>
        </ul>
        <Outlet />
      </div>
    </>
  )
}

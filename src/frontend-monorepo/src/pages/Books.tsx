import { Outlet } from 'react-router-dom'
export const Books = () => {
  return (
  <div>
      <h2>Harry Potter 1</h2>
      <h2>Harry Potter 2</h2>
      <h2>Harry Potter 3</h2>
      <h2>Harry Potter 4</h2>
      <h2>Harry Potter 5</h2>
      <h2>Harry Potter 6</h2>
      <h2>Harry Potter 7</h2>
      <Outlet/>
  </div>
  )
}

import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home: React.FC = () => {

  const navigate = useNavigate()

  // replace option replaces the previous item on the stack instead of adding on top of it
  // if there is only one item on the stack then user would exit the website

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={() => navigate('tasks')}>New Task</button>
      <button onClick={() => navigate('tasks', {replace: true})}>New Task and forget this page</button>
    </>
  )
}

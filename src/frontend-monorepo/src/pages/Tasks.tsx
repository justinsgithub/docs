import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Tasks: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <h1>Tasks Page</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  )
}
